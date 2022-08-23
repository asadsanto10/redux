import { AUTHORWISE, TAGWISE } from './actionType';

export const tagwiseChnage = (postTag, changeType) => {
  return {
    type: TAGWISE,
    payload: { postTag, changeType },
  };
};

export const authorWiseChnage = (authorName) => {
  return {
    type: AUTHORWISE,
    payload: { authorName },
  };
};
