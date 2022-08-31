/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postPerPage: 4,
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    chnagePostPageWise: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { chnagePostPageWise } = paginationSlice.actions;
export default paginationSlice;
