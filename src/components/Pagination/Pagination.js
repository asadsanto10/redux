/* eslint-disable no-plusplus */
import React from 'react';
import { useSelector } from 'react-redux';
import PageNumber from './PageNumber';

const Pagination = () => {
  const pageNumbers = [];
  const { transactions } = useSelector((state) => state.transactions);
  const { dataPerPage } = useSelector((state) => state.pagination);

  for (let i = 1; i <= Math.ceil(transactions.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-3 lg:px-0 flex gap-2 justify-end">
      {pageNumbers.map((pageNumber) => (
        <PageNumber key={pageNumber} pageNumber={pageNumber} />
      ))}
    </div>
  );
};

export default Pagination;
