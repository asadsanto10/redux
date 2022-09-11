/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiSlice } from '../features/api/apiSlice';
import { filterColors, filterStatus } from '../features/filterSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const { status, colors } = useSelector((state) => state.filters);
  const { data: todos } = apiSlice.useGetTodosQuery();

  const remainingTodo = todos?.filter((todo) => !todo.completed).length;

  const handelStatusChnage = (chstatus) => {
    dispatch(filterStatus(chstatus));
  };

  const handelColorChange = (chcolor) => {
    dispatch(filterColors(chcolor));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {(remainingTodo === 0 && 'No task') ||
          (remainingTodo > 1 ? `${remainingTodo} tasks` : `${remainingTodo} task`)}{' '}
        left
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handelStatusChnage('all')}
          className={`cursor-pointer ${status === 'all' && 'font-bold'}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handelStatusChnage('incomplete')}
          className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handelStatusChnage('complete')}
          className={`cursor-pointer ${status === 'complete' && 'font-bold'}`}
        >
          Complete
        </li>
        <li />
        <li />
        <li
          onClick={() => handelColorChange('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes('green') && 'bg-green-500'
          }`}
        />
        <li
          onClick={() => handelColorChange('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes('red') && 'bg-red-500'
          }`}
        />
        <li
          onClick={() => handelColorChange('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes('yellow') && 'bg-yellow-500'
          }`}
        />
      </ul>
    </div>
  );
};

export default Footer;
