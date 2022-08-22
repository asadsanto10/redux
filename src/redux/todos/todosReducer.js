import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from './actionType';
import initialState from './initialState';

const maxTodoId = (todos) => {
  return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: maxTodoId(state),
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }

        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload.todoId);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
