import { SEARCHPOST } from './actionType';

export const searchPost = (text) => {
  return {
    type: SEARCHPOST,
    payload: { text },
  };
};
