/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import { fetchTransactions } from '../../fetaures/transaction/transactionSlice';
import Form from '../Form';
import Pagination from '../Pagination/Pagination';
import Transaction from '../Transaction/Transaction';
import Filter from './Filter';
import Search from './Search';

const AllTransactions = () => {
  const { transactions, isLoading, isError } = useSelector((state) => state.transactions);
  const { dataPerPage, currentPage } = useSelector((state) => state.pagination);
  const { search, type } = useSelector((state) => state.filter);
  // console.log(transactions);
  const dispatch = useDispatch();
  const match = useMatch('/allTransactions');
  const { editAllTransaction } = useSelector((state) => state.transactions);
  useEffect(() => {
    dispatch(fetchTransactions({ search, type }));
  }, [dispatch, search, type]);

  // show 5 data per page
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = transactions.slice(indexOfFirstPost, indexOfLastPost);

  let content = null;
  if (!isLoading && !isError && transactions.length === 0) content = <p>No data found</p>;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>Error</p>;
  if (!isLoading && !isError && transactions.length > 0)
    content = currentData.map((transaction) => (
      <Transaction {...transaction} key={transaction.id} />
    ));

  return (
    <>
      <p className="second_heading">{match ? 'All' : 'Your'} Transactions:</p>
      <div className="grid grid-cols-1 text-center">
        <Search />

        <Filter />
      </div>

      {editAllTransaction && (
        <div className="mt-6">
          <Form />
        </div>
      )}

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>

      <Pagination />

      <div>
        <Link className="underline btn block" to="/">
          Back
        </Link>
      </div>
    </>
  );
};

export default AllTransactions;
