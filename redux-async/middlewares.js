/* eslint-disable consistent-return */
const fetch = require('node-fetch');

const delayedAction = (store) => (next) => (action) => {
  if (action.type === 'todo/added') {
    console.log('I am delaying you!');
    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  // eslint-disable-next-line consistent-return
  return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  // console.log(action.type);
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

module.exports = {
  delayedAction,
  fetchAsyncMiddleware,
};
