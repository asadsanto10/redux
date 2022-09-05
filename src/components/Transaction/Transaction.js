import React from 'react';
import deleteSVG from '../../assets/delete.svg';
import editSVG from '../../assets/edit.svg';

const Transaction = ({ name, type, amount }) => {
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button type="button" className="link">
          <img alt={editSVG} className="icon" src={editSVG} />
        </button>
        <button type="button" className="link">
          <img alt={deleteSVG} className="icon" src={deleteSVG} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
