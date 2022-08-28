const store = require('./app/store');
const { actions: counterActions } = require('./features/counter/counterSlice');
// const {
//   counterActions: { increment, decrement },
// } = require('./features/counter/counterSlice');

const {
  actions: { increment, decrement },
} = require('./features/dynamicCounter.js/dynamicCounterSlice');

console.log('Initial state:', store.getState());
// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
store.dispatch(counterActions.increment());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());
