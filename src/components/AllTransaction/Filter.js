/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Filter = () => {
  return (
    <div
      className="form-group radio"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="radio_group">
        <input
          required
          // onChange={(e) => setType(e.target.value)}
          type="radio"
          value="income"
          name="type"
          id="income"
          // checked={type === 'income'}
        />
        <label htmlFor="income">Income</label>
      </div>
      <div className="radio_group">
        <input
          // onChange={(e) => setType(e.target.value)}
          type="radio"
          value="expense"
          name="type"
          placeholder="Expense"
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
      </div>
    </div>
  );
};

export default Filter;
