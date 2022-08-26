import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../redux/todos/thunk/fetchTodos';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const incompleteTodo = todos.filter((todo) => !todo.completed);
  // console.log(completeTodo);
  // // console.log(incompleteTodo);

  const dispatch = useDispatch();
  // added from api
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);
  const { status, colors } = useSelector((state) => state.filters);
  // console.log(colors);

  const filterByStatus = (todo) => {
    switch (status) {
      case 'complete':
        return todo.completed;

      case 'incomplete':
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {incompleteTodo
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
