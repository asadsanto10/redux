import { added } from '../actions';
import { URL } from './apiURL';

const addTodos = (todoText) => {
  return async (dispatch) => {
    const responce = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ text: todoText, completed: false }),
      headers: { 'Content-Type': 'application/json; charset = UTF-8' },
    });
    const todo = await responce.json();
    console.log(todo);

    dispatch(added(todo.text));
  };
};

export default addTodos;
