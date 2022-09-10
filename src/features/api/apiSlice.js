import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['Videos', 'Video', 'RelatedVideos'],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
      keepUnusedDataFor: 120,
      providesTags: ['Videos'],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, args) => [{ type: 'Video', id: args }],
    }),
    // ?title_like=react&title_like=css
    getRelatredVideos: builder.query({
      query: ({ videoId, title }) => {
        const tags = title.split(' ');
        const query = `?${tags.map((t) => `title_like=${t}`).join('&')}&_limit=4`;
        return `/videos/${query}`;
      },
      providesTags: (result, error, args) => [{ type: 'RelatedVideos', id: args.videoId }],
    }),
    addVideo: builder.mutation({
      query: (videoData) => ({
        url: `/videos`,
        method: 'POST',
        body: videoData,
      }),
      invalidatesTags: ['Videos'],
    }),
    editVideo: builder.mutation({
      query: ({ videoId, data }) => ({
        url: `/videos/${videoId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, args) => [
        'Videos',
        { type: 'Video', id: args.videoId },
        {
          type: 'RelatedVideos',
          id: args.id,
        },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (videoId) => ({
        url: `/videos/${videoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Videos'],
    }),
  }),
});
