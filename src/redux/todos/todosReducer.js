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
import initialState from './initialState';

const maxTodoId = (todos) => {
  return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload.todos;

    case ADDED:
      return [
        ...state,
        {
          id: maxTodoId(state),
          text: action.payload.addedText,
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

    case UPDATED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            text: action.payload.todoText,
          };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todosReducer;
