import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos);

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
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
