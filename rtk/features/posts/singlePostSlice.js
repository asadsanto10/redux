/* eslint-disable no-param-reassign */
const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

const initialState = {
  loading: false,
  post: [],
  error: '',
  postFindParams: [],
};

// thunk function
const fetchPost = createAsyncThunk('singlePost/fetchPost', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/7');
  const post = await response.json();
  return post;
});

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
      state.error = '';
      state.postFindParams = action.payload?.title?.split(' ');
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = state.error.message;
      state.postFindParams = [];
    });
  },
});

module.exports = singlePostSlice;
module.exports.singleFetchPost = fetchPost;
