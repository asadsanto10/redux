/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideo, updateLikeUnlike } from './videoAPI';

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: '',
};

// async thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (videoId) => {
  const video = await getVideo(videoId);
  return video;
});

export const likeUnlikeUpdate = createAsyncThunk(
  'likeUnlike/likeUnlikeUpdate',
  async ({ id, exitsCount, type }) => {
    const likeUnlikeData = await updateLikeUnlike(id, exitsCount, type);
    return likeUnlikeData;
  }
);

const videoSlices = createSlice({
  name: 'video',
  initialState,
  reducers: {
    likesIncrement: (state, action) => {
      state.video.likes += action.payload;
    },
    dislikesIncrement: (state, action) => {
      state.video.unlikes += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(likeUnlikeUpdate.pending, (state) => {
        state.isError = false;
        // state.isLoading = true;
      })
      .addCase(likeUnlikeUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.video = action.payload;
      })
      .addCase(likeUnlikeUpdate.rejected, (state, action) => {
        // state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export const { likesIncrement, dislikesIncrement } = videoSlices.actions;
export default videoSlices;
