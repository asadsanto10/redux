/* eslint-disable eqeqeq */
import socket from '../../utils/socket';
import { apiSlice } from '../api/apiSlice';

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) =>
        `/messages/?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
      async onCacheEntryAdded(args, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;
          socket.on('message', (data) => {
            console.log(data);

            updateCachedData((draft) => {
              console.log(JSON.stringify(draft));
              // const messages = draft.data.find((c) => c.id == data?.data?.id);
              console.log(JSON.stringify(draft.messages));
              // if (conversation?.id) {
              //   conversation.message = data?.data?.message;
              //   conversation.timestamp = data?.data?.timestamp;
              // } else {
              //   //
              // }
              draft.push(data.data);
            });
          });
        } catch (err) {
          //
        }

        await cacheEntryRemoved;
        socket.close();
      },
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/messages`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
