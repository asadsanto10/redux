/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
  search: '',
  author: [],
};

const filterSlice = createSlice({
  name: 'tagFilter',
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.author = [];
      state.search = '';
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
        // state.author = [];
      }
    },
    authorSelected: (state, action) => {
      state.author.push(action.payload);
      state.tags = [];
      state.search = '';
    },
    authorRemoved: (state, action) => {
      const indexToRemove = state.author.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.author.splice(indexToRemove, 1);
        // state.tags = [];
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    clearFilter: (state) => {
      state.tags = [];
    },
  },
});

export default filterSlice;
export const { tagSelected, tagRemoved, authorSelected, authorRemoved, searched, clearFilter } =
  filterSlice.actions;
