/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { chnageDataPageWise } from '../../fetaures/pagination/paginationSlice';

const PageNumber = ({ pageNumber }) => {
  // console.log(pageNumber);
  const { currentPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const handelPageClick = (number) => {
    dispatch(chnageDataPageWise(number));
  };

  // style
  const btnSelected =
    currentPage === pageNumber
      ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
      : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

  return (
    <div onClick={() => handelPageClick(pageNumber)} className={btnSelected}>
      {pageNumber}
    </div>
  );
};

export default PageNumber;
