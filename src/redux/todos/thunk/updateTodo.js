import { updated } from '../actions';
import { URL } from './apiURL';

const updateTodo = (todoId, totoText) => {
  // console.log(todoId);
  // console.log(totoText);
  return async (dispatch) => {
    const responce = await fetch(`${URL}${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({ text: totoText }),
      headers: { 'Content-Type': 'application/json; charset = UTF-8' },
    });
    console.log(responce);
    const todo = await responce.json();
    console.log(todo);
    // console.log(totoText);

    dispatch(updated(todo.id, todo.text));
  };
};

export default updateTodo;
