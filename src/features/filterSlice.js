/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'all',
  colors: [],
  clearComplete: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterStatus: (state, action) => {
      state.status = action.payload;
    },

    filterColors: (state, action) => {
      if (action.payload.length === 0) {
        state.colors = [];
        return;
      }
      if (state.colors.includes(action.payload)) {
        state.colors = state.colors.filter((existingColor) => existingColor !== action.payload);
      } else {
        state.colors.push(action.payload);
      }
    },
    clearCompleteTask: (state, action) => {
      state.clearComplete = action.payload;
    },
  },
});

export default filterSlice;
export const { filterStatus, filterColors, clearCompleteTask } = filterSlice.actions;
