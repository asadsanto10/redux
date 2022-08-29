const store = require('./app/store');
const { relatedFetchPost } = require('./features/posts/relatedPostSlice');
const { singleFetchPost } = require('./features/posts/singlePostSlice');

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState().relatedPost);
});

// disptach actions
// store.dispatch(singleFetchPost());
// store.dispatch(relatedFetchPost('asasd'));

// disptach actions
(async () => {
  // dispatch single post
  const originalPromiseResult = await store.dispatch(singleFetchPost()).unwrap();
  // get single post promise and title split
  const titleArray = originalPromiseResult.title.split(' ');
  // make a final url search params
  const finalParams = titleArray.map((params) => `title_like=${params}`).join('&');
  // dispatch related post
  await store.dispatch(relatedFetchPost(finalParams));
})();
