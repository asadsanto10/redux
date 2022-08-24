import { combineReducers } from 'redux';
import filtersReducer from './blog/filters/filtersReducer';
import postsReducer from './blog/posts/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  postFilter: filtersReducer,
});
export default rootReducer;
