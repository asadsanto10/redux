import { colorselected } from '../actions';
import { URL } from './apiURL';

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const responce = await fetch(`${URL}${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({ color }),
      headers: { 'Content-Type': 'application/json; charset = UTF-8' },
    });
    const todo = await responce.json();
    console.log(todo);

    dispatch(colorselected(todo.id, todo.color));
  };
};

export default updateColor;
