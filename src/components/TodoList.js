import React from 'react';
import { useSelector } from 'react-redux';
import { apiSlice } from '../features/api/apiSlice';
import Error from './Error';
import Todo from './Todo';

const TodoList = () => {
  const { status, colors, clearComplete } = useSelector((state) => state.filters);
  const { data, isError, isLoading } = apiSlice.useGetTodosQuery({ status, colors, clearComplete });

  let content = null;

  if (isLoading) {
    content = <h5>Loading...</h5>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <Error message="No todos found" />;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((todo) => <Todo key={todo.id} {...todo} />);
  }

  return <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">{content}</div>;
};

export default TodoList;
