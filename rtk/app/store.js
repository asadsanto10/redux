const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const { reducer: counterReducer } = require('../features/counter/counterSlice');
const {
  reducer: dynamicCounterReducer,
} = require('../features/dynamicCounter.js/dynamicCounterSlice');
const postSlice = require('../features/post/postSlice');
const relatedPostSlice = require('../features/posts/relatedPostSlice');
const singlePostSlice = require('../features/posts/singlePostSlice');

// configure store
const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // dynamicCounter: dynamicCounterReducer,
    // post: postSlice.reducer,
    singlePost: singlePostSlice.reducer,
    relatedPost: relatedPostSlice.reducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(createLogger()),
});

module.exports = store;
