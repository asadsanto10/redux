import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
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
    updateTodoStatus: builder.mutation({
      query: ({ todoId, currentState }) => ({
        url: `/todos/${todoId}`,
        method: 'PATCH',
        body: { completed: !currentState },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});
