const store = require('./app/store');

const { fetchPost } = require('./features/post/postSlice');

console.log('Initial state:', store.getState());
// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
store.dispatch(fetchPost());
