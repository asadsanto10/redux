import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTransactions } from '../../fetaures/transaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
  const { transactions, isLoading, isError } = useSelector((state) => state.transactions);
  const { dataPerPage, currentPage } = useSelector((state) => state.pagination);
  const { search, type } = useSelector((state) => state.filter);
  // console.log(transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions({ search: '', type: '' }));
  }, [dispatch, search, type]);

  // show 5 data per page
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = transactions.slice(indexOfFirstPost, indexOfLastPost);

  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>Error</p>;
  if (!isLoading && !isError && currentData.length > 0)
    content = currentData.map((transaction) => (
      <Transaction {...transaction} key={transaction.id} />
    ));

  if (!isLoading && !isError && currentData.length === 0) content = <p>No data found</p>;

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
      <div>
        <Link className="underline btn block" to="/allTransactions">
          View All
        </Link>
      </div>
    </>
  );
};

export default Transactions;
