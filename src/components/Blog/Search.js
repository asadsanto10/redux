/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import searchImage from '../../assets/images/search.svg';
import { searchPost } from '../../redux/blog/filters/action';

const Search = () => {
  const dispatch = useDispatch();

  // debounce handler
  // const debounce = (fn, delay) => {
  //   console.log(e);
  //   let timeOut;
  //   return () => {
  //     if (timeOut) {
  //       clearTimeout(timeOut);
  //     }
  //     timeOut = setTimeout(() => {
  //       fn();
  //     }, delay);
  //   };
  // };

  // search handler with debounce
  let timeOut;
  const handelInpit = (e) => {
    const text = e.target.value;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      dispatch(searchPost(text));
    }, 2000);
  };

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={handelInpit}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="inline h-6 cursor-pointer" src={searchImage} alt="Search" />
    </div>
  );
};

export default Search;
