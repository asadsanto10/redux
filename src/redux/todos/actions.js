import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
  // eslint-disable-next-line prettier/prettier
  UPDATED
} from './actionType';

export const loded = (todos) => {
  return {
    type: LOADED,
    payload: { todos },
  };
};
export const added = (addedText) => {
  return {
    type: ADDED,
    payload: { addedText },
  };
};

export const toggled = (todoId) => {
  return { type: TOGGLED, payload: { todoId } };
};

export const colorselected = (todoId, color) => {
  return { type: COLORSELECTED, payload: { todoId, color } };
};

export const deleted = (todoId) => {
  return { type: DELETED, payload: { todoId } };
};

export const allCompleted = () => {
  return { type: ALLCOMPLETED };
};

export const clearcompleted = () => {
  return { type: CLEARCOMPLETED };
};

export const updated = (todoId, todoText) => {
  return {
    type: UPDATED,
    payload: { todoId, todoText },
  };
};
