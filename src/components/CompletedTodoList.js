import React from 'react';
import { useSelector } from 'react-redux';
import CompletedTodo from './CompletedTodo';

const CompletedTodoList = () => {
  const todos = useSelector((state) => state.todos);
  const completeTodo = todos.filter((todo) => todo.completed);
  return (
    <div>
      {completeTodo.map((todo) => (
        <CompletedTodo {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default CompletedTodoList;
