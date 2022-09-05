import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../fetaures/transaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
  const { transactions, isLoading, isError, error } = useSelector((state) => state.transactions);
  // console.log(transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>Error</p>;
  if (!isLoading && !isError && transactions.length > 0)
    content = transactions.map((transaction) => (
      <Transaction {...transaction} key={transaction.id} />
    ));

  if (!isLoading && !isError && transactions.length === 0) content = <p>No data found</p>;

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
