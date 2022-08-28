const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const { reducer: counterReducer } = require('../features/counter/counterSlice');
const {
  reducer: dynamicCounterReducer,
} = require('../features/dynamicCounter.js/dynamicCounterSlice');
const postSlice = require('../features/post/postSlice');

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    post: postSlice.reducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(createLogger()),
});

module.exports = store;
