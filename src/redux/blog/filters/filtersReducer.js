import { AUTHORWISE, TAGWISE } from './actionType';
import initialState from './initialState';

const filtersReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case TAGWISE:
      switch (action.payload.changeType) {
        case 'added':
          return {
            ...state,
            categories: [...state.categories, action.payload.postTag],
          };

        case 'remove':
          return {
            ...state,
            categories: state.categories.filter(
              (existingC) => existingC !== action.payload.postTag
            ),
          };

        default:
          return state;
      }
    case AUTHORWISE:
      return { ...state };

    default:
      return state;
  }
};

export default filtersReducer;
