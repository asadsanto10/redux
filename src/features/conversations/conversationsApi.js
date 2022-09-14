/* eslint-disable eqeqeq */
import { apiSlice } from '../api/apiSlice';
import { messagesApi } from '../messages/messagesApi';

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations/?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
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
            const draftConversation = draft.find((c) => c.id == args.id);
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
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
