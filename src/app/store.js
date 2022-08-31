import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';
import relatedVideosSlice from '../features/relatedVideos/relatedVideosSlice';
import tagsSlices from '../features/tags/tagsSlice';
import videoSlices from '../features/video.js/videoSlice';
import videosSlices from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    videos: videosSlices.reducer,
    tags: tagsSlices.reducer,
    singleVideo: videoSlices.reducer,
    relatedVideos: relatedVideosSlice.reducer,
    filter: filterSlice.reducer,
  },
});
