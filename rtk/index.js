const store = require('./app/store');
const {
  counterActions: { increment, decrement },
} = require('./features/counter/counterSlice');

console.log('Initial state:', store.getState());
// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());
