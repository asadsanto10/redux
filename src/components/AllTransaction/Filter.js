/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, selectType } from '../../fetaures/filter/filterSlice';
import { chnageDataPageWise } from '../../fetaures/pagination/paginationSlice';

const Filter = () => {
  const [type, setType] = useState('');
  // console.log(type);

  const dispatch = useDispatch();

  const { search, type: filterType } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(selectType(type));
    dispatch(chnageDataPageWise(1));
  }, [dispatch, type]);

  // reset search and filter
  const handelReset = () => {
    dispatch(clearFilter());
    setType('');
  };

  let resetButton = '';

  if (search !== '' || filterType !== '') {
    resetButton = (
      <div>
        <button
          onClick={handelReset}
          type="button"
          className="bg-blue-600 text-white px-8 py-1 rounded-full cursor-pointer"
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className="form-group radio"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="radio_group">
          <input
            required
            onChange={(e) => setType(e.target.value)}
            type="radio"
            value="income"
            name="type"
            id="income"
            checked={type === 'income'}
          />
          <label htmlFor="income">Income</label>
        </div>
        <div className="radio_group">
          <input
            // onChange={(e) => setType(e.target.value)}
            type="radio"
            value="expense"
            name="type"
            placeholder="Expense"
            id="expense"
            onChange={(e) => setType(e.target.value)}
            checked={type === 'expense'}
          />
          <label htmlFor="expense">Expense</label>
        </div>
      </div>
      {resetButton}
    </>
  );
};

export default Filter;
