import { toggled } from '../actions';
import { URL } from './apiURL';

const updateTodoStatus = (todoId, currentState) => {
  return async (dispatch) => {
    const responce = await fetch(`${URL}${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !currentState }),
      headers: { 'Content-Type': 'application/json; charset = UTF-8' },
    });
    const todo = await responce.json();
    console.log(todo);

    dispatch(toggled(todo.id));
  };
};

export default updateTodoStatus;
