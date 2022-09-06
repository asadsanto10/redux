import React from 'react';
import { useSelector } from 'react-redux';
import { thousandSeparator } from '../utils/thousandSeparator';

const Balance = () => {
  const { transactions } = useSelector((state) => state.transactions || {});

  const calcualteIncome = (transactionsData) => {
    let income = 0;
    transactionsData.forEach((transaction) => {
      const { type, amount } = transaction;
      if (type === 'income') {
        income += amount;
      } else {
        income -= amount;
      }
    });
    return income;
  };
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {' '}
          {transactions.length > 0 ? thousandSeparator(calcualteIncome(transactions)) : 0}
        </span>
      </h3>
    </div>
  );
};

export default Balance;
