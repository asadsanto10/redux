/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const { createSlice } = require('@reduxjs/toolkit');
const {
  actions: { increment },
} = require('../counter/counterSlice');

// initial state
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: 'dynamicCounter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  // extraReducers: {
  //   'counter/increment': (state, action) => {
  //     state.count += 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(increment, (state, action) => {
      state.count += 1;
    });
  },
});

module.exports = dynamicCounterSlice;
