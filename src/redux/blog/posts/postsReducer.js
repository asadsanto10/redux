import { SEARCHPOST } from './actionType';
import initialState from './initialState';

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHPOST:
      return [...state];

    default:
      return state;
  }
};

export default postsReducer;
