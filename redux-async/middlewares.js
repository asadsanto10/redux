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

const fetchTodo = (store) => (next) => async (action) => {
  // console.log(action.type);
  if (action.type === 'todo/fetch') {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

    const todos = await response.json();

    store.dispatch({
      type: 'todo/loaded',
      payload: todos,
    });

    console.log(`Number of updated todos: ${store.getState().todo.length}`);

    return;
  }

  return next(action);
};

module.exports = {
  delayedAction,
  fetchTodo,
};
