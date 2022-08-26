import { deleted } from '../actions';
import { URL } from './apiURL';

const deleteTodos = (todoId) => {
  return async (dispatch) => {
    await fetch(`${URL}${todoId}`, {
      method: 'DELETE',
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodos;
