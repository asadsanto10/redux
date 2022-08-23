/* eslint-disable import/named */
import { AUTHORWISE, TAGWISE, TITLESEARCHPOST } from './actionType';

export const searchPost = (searchText) => {
  return {
    type: TITLESEARCHPOST,
    payload: { searchText },
  };
};

export const tagwiseChnage = (categoriesName, changeType) => {
  return {
    type: TAGWISE,
    payload: { categoriesName, changeType },
  };
};

export const authorWiseChnage = (authorName, changeType) => {
  return {
    type: AUTHORWISE,
    payload: { authorName, changeType },
  };
};
