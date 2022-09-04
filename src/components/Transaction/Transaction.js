import React from 'react';
import deleteSVG from '../../assets/delete.svg';
import editSVG from '../../assets/edit.svg';

const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
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
