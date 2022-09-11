import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (data) => {
        let query = '';

        if (data?.status && data.status !== 'all') {
          query = `?completed=${data.status === 'complete'}`;
        }

        if (data?.colors?.length > 0) {
          query = `?${data?.colors?.map((color) => `color_like=${color}`).join('&')}`;
        }

        if (data?.clearComplete) {
          query = `?completed=false`;
        }

        return `/todos/${query}`;
      },
      keepUnusedDataFor: 120,
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation({
      query: (todoData) => ({
        url: '/todos',
        method: 'POST',
        body: todoData,
      }),
      invalidatesTags: ['todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['todos'],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});
