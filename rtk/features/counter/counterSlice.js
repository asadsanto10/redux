/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const { createSlice } = require('@reduxjs/toolkit');

// initial state
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

module.exports = counterSlice;
// module.exports.counterActions = counterSlice.actions;
