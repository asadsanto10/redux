import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
export default rootReducer;
