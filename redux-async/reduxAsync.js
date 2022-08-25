const { createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');
const { fetchTodos } = require('./function');
const { delayedAction, fetchAsyncMiddleware } = require('./middlewares');

const initialState = {
  todo: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/added':
      return {
        ...state,
        todo: [...state.todo, { title: action.payload }],
      };

    case 'todo/loaded':
      // console.log(action.payload);
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };

    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
// store.dispatch({
//   type: 'todo/added',
//   payload: 'asad',
// });

store.dispatch(fetchTodos);
