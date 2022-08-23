import { combineReducers } from 'redux';
import filtersReducer from './blog/filters/filtersReducer';
import postsReducer from './blog/posts/postsReducer';

const rootReducer = combineReducers({
  // todos: todosReducer,
  // filters: filtersReducer,
  posts: postsReducer,
  postFilter: filtersReducer,
});
export default rootReducer;
