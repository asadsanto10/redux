const store = require('./app/store');

const {
  actions: { increment, decrement },
} = require('./features/dynamicCounter.js/dynamicCounterSlice');

console.log('Initial state:', store.getState());
// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState().dynamicCounter);
});

// disptach actions
store.dispatch(increment(2));

store.dispatch(increment(1));

store.dispatch(decrement(2));
