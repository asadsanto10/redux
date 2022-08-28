const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const { reducer: counterReducer } = require('../features/counter/counterSlice');
const {
  reducer: dynamicCounterReducer,
} = require('../features/dynamicCounter.js/dynamicCounterSlice');

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(createLogger()),
});

module.exports = store;
