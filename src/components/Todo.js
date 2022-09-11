/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState } from 'react';

import cancelImage from '../assets/cancel.png';
import editImage from '../assets/edit.svg';
import { apiSlice } from '../features/api/apiSlice';

const Todo = ({ text, color, completed, id }) => {
  const [editInput, setEditInput] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [focus, setfocus] = useState(false);
  const inputRef = useRef();

  const [updateTodo] = apiSlice.useUpdateTodoMutation();
  const [deleteTodo] = apiSlice.useDeleteTodoMutation();

  const handelStatusChnage = (todoId) => {
    updateTodo({ id: todoId, data: { completed: !completed } });
  };

  const handelColorChange = (todoId, todoColor) => {
    updateTodo({ id: todoId, data: { color: todoColor } });
  };

  const handelDeleteTodo = (todoId) => {
    deleteTodo(todoId);
  };

  // handel editable button click
  const handelEditButton = (inputText) => {
    setEditInput(inputText);
    setfocus(!focus);
    setIsEditable(!isEditable);
  };

  // handel editable input field
  const handelUpdateInput = (e, todoId) => {
    if (e.key === 'Enter') {
      updateTodo({ id: todoId, data: { text: editInput } });
      setIsEditable(false);
    }
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && 'border-green-500 focus-within:border-green-500'
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handelStatusChnage(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && 'line-through'}`}>
        {isEditable ? (
          <input
            ref={inputRef}
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            onKeyDown={(e) => handelUpdateInput(e, id)}
            className="bg-white border border-slate-300 rounded-md py-1 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            // value={text}
            placeholder="Edit text"
          />
        ) : (
          <div>{text}</div>
        )}
      </div>

      <div
        role="button"
        tabIndex="0"
        onClick={() => handelColorChange(id, 'green')}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          color === 'green' && ' bg-green-500'
        } hover:bg-green-500 border-green-500`}
      />

      <div
        role="button"
        tabIndex="0"
        onClick={() => handelColorChange(id, 'yellow')}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          color === 'yellow' && 'bg-yellow-500'
        }  hover:bg-yellow-500 border-yellow-500`}
      />

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          color === 'red' && 'bg-red-500'
        } hover:bg-red-500 border-red-500`}
        role="button"
        tabIndex="0"
        onClick={() => handelColorChange(id, 'red')}
      />

      <img
        onClick={() => handelEditButton(text)}
        src={editImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Edit"
      />

      <img
        onClick={() => handelDeleteTodo(id)}
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
