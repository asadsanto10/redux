import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{counter}</div>
      <div className="flex space-x-3">
        <button
          onClick={incrementCounter}
          type="button"
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={decrementCounter}
          type="button"
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
