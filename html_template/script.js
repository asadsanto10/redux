// select dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
// eslint-disable-next-line default-param-last
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  }

  return state;
};

// create store
// eslint-disable-next-line no-undef
const store = Redux.createStore(counterReducer);
// render couner
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

store.subscribe(render);

// buton click listeners
incrementEl.addEventListener('click', () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener('click', () => {
  store.dispatch(decrement(2));
});
