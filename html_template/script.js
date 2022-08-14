// select dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// initial state
const initialState = {
  value: 0,
};

// create reducer function
// eslint-disable-next-line default-param-last
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: 'increment',
  });
});

decrementEl.addEventListener('click', () => {
  store.dispatch({
    type: 'decrement',
  });
});
