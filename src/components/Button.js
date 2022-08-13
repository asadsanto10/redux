import React from 'react';

function Button({ handler, children }) {
  return (
    <button
      onClick={handler}
      type="button"
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
    >
      {children}
    </button>
  );
}

export default Button;
