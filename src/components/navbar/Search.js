import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../../features/filter/filterSlice';

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const match = useMatch('/');
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input.toLowerCase()));

    // if user is not in homepage

    if (!match) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        className="outline-none border-none mr-2"
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
