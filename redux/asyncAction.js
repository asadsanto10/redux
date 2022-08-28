const fetch = require('node-fetch');
const { createStore, applyMiddleware } = require('redux');
const { default: thunkMiddleware } = require('redux-thunk');

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

const fecthPostRequest = () => {
  return {
    type: 'post/request',
  };
};

const fecthPostSucceeded = (posts) => {
  return {
    type: 'post/succeeded',
    payload: posts,
  };
};

const fecthPostFaild = (error) => {
  return {
    type: 'post/faild',
    payload: error,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'post/request':
      return {
        ...state,
        loading: true,
        error: '',
      };

    case 'post/succeeded':
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case 'post/faild':
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.message,
      };

    default:
      return state;
  }
};

// thunk function
const fetchPost = () => {
  return async (dispatch) => {
    dispatch(fecthPostRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const posts = await response.json();

      dispatch(fecthPostSucceeded(posts));
    } catch (error) {
      dispatch(fecthPostFaild(error));
    }
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(fetchPost());
