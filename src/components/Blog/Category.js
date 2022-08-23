/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagwiseChnage } from '../../redux/blog/filters/action';

const Category = ({ title }) => {
  const { categories } = useSelector((state) => state.postFilter);

  const dispatch = useDispatch();

  const handelCategory = (cateTitle) => {
    // console.log(cateTitle);

    if (!categories.includes(cateTitle)) {
      dispatch(tagwiseChnage(cateTitle, 'added'));
    } else {
      dispatch(tagwiseChnage(cateTitle, 'remove'));
    }
  };

  return (
    <span
      onClick={() => handelCategory(title)}
      className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
    >
      {title}
    </span>
  );
};

export default Category;
