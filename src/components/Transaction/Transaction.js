import React from 'react';
import { useDispatch } from 'react-redux';
import deleteSVG from '../../assets/delete.svg';
import editSVG from '../../assets/edit.svg';
import { editActive, removeTransaction } from '../../fetaures/transaction/transactionSlice';
import { thousandSeparator } from '../../utils/thousandSeparator';

const Transaction = ({ name, type, amount, id }) => {
  const dispatch = useDispatch();

  // edit
  const handelEdit = () => {
    dispatch(editActive({ name, type, amount, id }));
  };

  // delete
  const handelDelete = () => {
    dispatch(removeTransaction(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {thousandSeparator(amount)}</p>
        <button type="button" className="link" onClick={handelEdit}>
          <img alt={editSVG} className="icon" src={editSVG} />
        </button>
        <button onClick={handelDelete} type="button" className="link">
          <img alt={deleteSVG} className="icon" src={deleteSVG} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
