/* eslint-disable no-unused-expressions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useMatch } from 'react-router-dom';
import deleteSVG from '../../assets/delete.svg';
import editSVG from '../../assets/edit.svg';
import {
  editActive,
  editOthersPage,
  // eslint-disable-next-line prettier/prettier
  removeTransaction
} from '../../fetaures/transaction/transactionSlice';
import { thousandSeparator } from '../../utils/thousandSeparator';

const Transaction = ({ name, type, amount, id }) => {
  const dispatch = useDispatch();
  const match = useMatch('/allTransactions');

  // edit
  const handelEdit = () => {
    dispatch(editActive({ name, type, amount, id }));
    match && dispatch(editOthersPage(true));
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
