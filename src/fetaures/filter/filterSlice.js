/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  search: '',
};

const filterSlice = createSlice({
  name: 'tagFilter',
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
    clearFilter: (state) => {
      state.search = '';
      state.type = '';
    },
  },
});

export default filterSlice;
export const { selectType, searched, clearFilter } = filterSlice.actions;
