/* eslint-disable no-plusplus */
import React from 'react';
import { useSelector } from 'react-redux';
import PageNumber from './PageNumber';

const Pagination = () => {
  const pageNumbers = [];
  const { videos } = useSelector((state) => state.videos);
  const { postPerPage } = useSelector((state) => state.pagination);

  for (let i = 1; i <= Math.ceil(videos.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(`pageNumbers`, pageNumbers);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map((pageNumber) => (
          <PageNumber key={pageNumber} pageNumber={pageNumber} />
        ))}
      </div>
    </section>
  );
};

export default Pagination;
