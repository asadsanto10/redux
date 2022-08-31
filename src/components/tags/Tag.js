/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';
import { chnagePostPageWise } from '../../features/pagination/paginationSlice';

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  // console.log(selectedTags);

  const isSelected = !!selectedTags.includes(title);

  const handelSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
      dispatch(chnagePostPageWise(1));
    } else {
      dispatch(tagSelected(title));
      dispatch(chnagePostPageWise(1));
    }
  };

  const style = isSelected
    ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
    : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

  return (
    <div>
      <div onClick={handelSelect} className={style}>
        {title}
      </div>

      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">redux</div> */}
    </div>
  );
};

export default Tag;
