/* eslint-disable eqeqeq */
import initialState from './initialState';

const postsReducer = (state = initialState, action) => {
  // console.log(action?.payload?.searchText);
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
