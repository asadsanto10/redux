/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleTickImage from '../assets/double-tick.png';
import noteimage from '../assets/notes.png';
import plusimage from '../assets/plus.png';
import { apiSlice } from '../features/api/apiSlice';
import { clearCompleteTask, filterColors } from '../features/filterSlice';
import Error from './Error';

const Header = () => {
  const [input, setinput] = useState('');
  const dispatch = useDispatch();
  const [addTodo, { isError, isSuccess }] = apiSlice.useAddTodoMutation();
  const { data } = apiSlice.useGetTodosQuery({});

  const [updateTodo] = apiSlice.useUpdateTodoMutation();
  const submitHandeler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      addTodo({ text: input, completed: false });
      setinput('');
    }
  };

  const handelCompleteAllTask = async () => {
    await data.forEach(
      (todo) => !todo?.completed && updateTodo({ id: todo.id, data: { completed: true } })
    );
  };
  const clearCompleteAllTask = () => {
    dispatch(clearCompleteTask(true));
    dispatch(filterColors([]));
  };

  return (
    <div>
      <form
        onSubmit={submitHandeler}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteimage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusimage})] bg-no-repeat bg-contain`}
        />
      </form>
      {isSuccess && <h4 className="mt-2 text-teal-500">Todo was added successfully</h4>}
      {isError && <Error className="text-rose-600" message="There was an error todo list" />}

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTickImage} alt="Complete" />
          <span onClick={handelCompleteAllTask}>Complete All Tasks</span>
        </li>
        <li onClick={clearCompleteAllTask} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
