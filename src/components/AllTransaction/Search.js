import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../fetaures/filter/filterSlice';
import { chnageDataPageWise } from '../../fetaures/pagination/paginationSlice';

const Search = () => {
  const { search } = useSelector((state) => state.filter);

  const [input, setInput] = useState(search);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input.toLowerCase()));
    dispatch(chnageDataPageWise(1));
  };

  useEffect(() => {
    if (search === '') {
      setInput('');
    }
  }, [search]);

  return (
    <form onSubmit={handelSubmit}>
      <input
        className="outline-none border mr-2 "
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="search"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
