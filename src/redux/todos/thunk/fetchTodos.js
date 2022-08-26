import { loded } from '../actions';
import { URL } from './apiURL';

const fetchTodos = async (dispatch) => {
  const responce = await fetch(URL);
  const todos = await responce.json();

  dispatch(loded(todos));
};

export default fetchTodos;
