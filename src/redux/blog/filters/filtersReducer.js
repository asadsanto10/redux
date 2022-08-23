import { AUTHORWISE, TAGWISE, TITLESEARCHPOST } from './actionType';
import initialState from './initialState';

const filtersReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case TITLESEARCHPOST:
      return { ...state, searchText: action.payload.searchText };
    case TAGWISE:
      switch (action.payload.changeType) {
        case 'added':
          return {
            ...state,
            categories: [...state.categories, action.payload.categoriesName],
          };

        case 'remove':
          return {
            ...state,
            categories: state.categories.filter(
              (existingC) => existingC !== action.payload.categoriesName
            ),
          };

        default:
          return state;
      }
    case AUTHORWISE:
      switch (action.payload.changeType) {
        case 'added':
          return {
            ...state,
            author: [...state.author, action.payload.authorName],
          };

        case 'remove':
          return {
            ...state,
            author: state.author.filter((existingA) => existingA !== action.payload.authorName),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filtersReducer;
