import { configureStore } from '@reduxjs/toolkit';
import tagsSlices from '../features/tags/tagsSlice';
import videoSlices from '../features/video.js/videoSlice';
import videosSlices from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    videos: videosSlices.reducer,
    tags: tagsSlices.reducer,
    singleVideo: videoSlices.reducer,
  },
});
