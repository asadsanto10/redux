/* eslint-disable eqeqeq */
import io from 'socket.io-client';
import { apiSlice } from '../api/apiSlice';
import { messagesApi } from '../messages/messagesApi';

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations/?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
      // responce modify

      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get('X-Total-Count');
        // console.log(totalCount);
        return {
          data: apiResponse,
          totalCount,
        };
      },

      async onCacheEntryAdded(args, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        // create socket
        const socket = io('http://localhost:9000', {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttempts: 10,
          transports: ['websocket'],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });

        try {
          await cacheDataLoaded;
          socket.on('conversation', (data) => {
            // console.log(data);
            updateCachedData((draft) => {
              const conversation = draft.find((c) => c.id == data?.data?.id);

              if (conversation?.id) {
                conversation.message = data?.data?.message;
                conversation.timestamp = data?.data?.timestamp;
              } else {
                // do nothing
              }
            });
          });
        } catch (err) {
          //
        }

        await cacheEntryRemoved;
        socket.close();
      },
    }),
    getMoreConversations: builder.query({
      query: ({ email, page }) =>
        `/conversations/?participants_like=${email}&_sort=timestamp&_order=desc&_page=${page}&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          const conversations = await queryFulfilled;

          if (conversations?.data?.length > 0) {
            // update conversation cache  Pessimistic start
            dispatch(
              apiSlice.util.updateQueryData('getConversations', email, (draft) => {
                return {
                  data: [...draft.data, ...conversations.data],
                  totalCount: Number(draft.totalCount),
                };
              })
            );
            // update conversation cache Pessimistic end
          }
        } catch (error) {
          //
        }
      },
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `/conversations/?participants_like=${userEmail}-${participantEmail}&participants_like=${participantEmail}-${userEmail}`,
    }),
    addConversation: builder.mutation({
      query: ({ data }) => ({
        url: `/conversations`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResulr1 = dispatch(
          apiSlice.util.updateQueryData('getConversations', args.sender, (draft) => {
            draft.push({ ...args.data, id: args.data.id });
          })
        );
        // optimistic cache update end

        try {
          const conversation = await queryFulfilled;
          if (conversation?.data?.id) {
            // silent entry to message table

            const { users } = args.data;

            const senderUser = users.find((user) => user.email === args.sender);
            const receiverUser = users.find((user) => user.email !== args.sender);

            dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation?.data?.id,
                sender: senderUser,
                receiver: receiverUser,
                message: args.data.message,
                timestamp: args.data.timestamp,
              })
            );
          }
        } catch (error) {
          patchResulr1.undo();
        }
      },
    }),
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResulr1 = dispatch(
          apiSlice.util.updateQueryData('getConversations', args.sender, (draft) => {
            const draftConversation = draft.data.find((c) => c.id == args.id);
            draftConversation.message = args.data.message;
            draftConversation.timestamp = args.data.timestamp;
          })
        );
        // optimistic cache update end

        try {
          const conversation = await queryFulfilled;

          if (conversation?.data?.id) {
            // silent entry to message table
            const { users } = args.data;

            const senderUser = users.find((user) => user.email === args.sender);
            const receiverUser = users.find((user) => user.email !== args.sender);

            const res = await dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation?.data?.id,
                sender: senderUser,
                receiver: receiverUser,
                message: args.data.message,
                timestamp: args.data.timestamp,
              })
            ).unwrap();

            // update message Pessimistic start
            dispatch(
              apiSlice.util.updateQueryData(
                'getMessages',
                res.conversationId.toString(),
                (draft) => {
                  draft.push(res);
                }
              )
            );
            // update message Pessimistic end
          }
        } catch (error) {
          patchResulr1.undo();
        }
      },
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
