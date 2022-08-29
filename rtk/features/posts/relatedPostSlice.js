/* eslint-disable no-param-reassign */
const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

const initialState = {
  loading: false,
  relatedPost: [],
  error: '',
};

// thunk function
const fetchPost = createAsyncThunk('singlePost/fetchPost', async (params) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
  const post = await response.json();
  return post;
});

const relatedPostSlice = createSlice({
  name: 'relatedPost',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.relatedPost = action.payload;
      state.error = '';
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.relatedPost = [];
      state.error = state.error.message;
    });
  },
});

module.exports = relatedPostSlice;
module.exports.relatedFetchPost = fetchPost;
