/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../fetaures/transaction/transactionSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const { isError, isLoading } = useSelector((state) => state.transactions);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleSubmit}>
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
          Add Transaction
        </button>
        {isError && !isLoading && <p className="error">Error</p>}
      </form>

      <button type="button" className="btn cancel_edit">
        Cancel Edit
      </button>
    </div>
  );
};

export default Form;
