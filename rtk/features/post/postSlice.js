/* eslint-disable no-param-reassign */
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

// thunk function
const fetchPost = createAsyncThunk('post/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await response.json();
  return posts;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = state.error.message;
    });
  },
});

module.exports = postSlice;
module.exports.fetchPost = fetchPost;
