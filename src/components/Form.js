/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTransaction,
  createTransaction,
  // eslint-disable-next-line prettier/prettier
  editInActive
} from '../fetaures/transaction/transactionSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  const [editMode, seteditMode] = useState(false);

  const dispatch = useDispatch();

  const { isError, isLoading } = useSelector((state) => state.transactions);

  const { editing } = useSelector((state) => state.transactions || {});
  // console.log(editing);

  const resetForm = () => {
    setName('');
    setType('');
    setAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
    resetForm();
  };

  const cancelEditMode = () => {
    seteditMode(false);
    resetForm();
    dispatch(editInActive());
  };

  // listen for edit mode active
  useEffect(() => {
    if (editing.id) {
      seteditMode(true);
      setName(editing.name);
      setType(editing.type);
      setAmount(editing.amount);
    } else {
      seteditMode(false);
      resetForm();
    }
  }, [editing.amount, editing.id, editing.name, editing.type]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing.id,
        data: {
          name,
          type,
          amount: Number(amount),
        },
      })
    );
    resetForm();
    seteditMode(false);
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              required
              onChange={(e) => setType(e.target.value)}
              type="radio"
              value="income"
              name="type"
              checked={type === 'income'}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              onChange={(e) => setType(e.target.value)}
              checked={type === 'expense'}
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input
            required
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
          />
        </div>

        <button disabled={isLoading} type="submit" className="btn">
          {editMode ? 'Update Transaction' : 'Add Transaction'}
        </button>
        {isError && !isLoading && <p className="error">Error</p>}
      </form>

      {editMode && (
        <button onClick={cancelEditMode} type="button" className="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
