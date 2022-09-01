/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { authorRemoved, authorSelected } from '../../features/filter/filterSlice';
import { chnagePostPageWise } from '../../features/pagination/paginationSlice';

const RelatedVideoItem = ({ thumbnail, author, title, duration, id, views, date }) => {
  const dispatch = useDispatch();
  const { author: selectedAuthor } = useSelector((state) => state.filter);
  const match = useMatch('/');
  const navigate = useNavigate();
  const isSelected = !!selectedAuthor.includes(author);
  const handelAuthor = () => {
    if (isSelected) {
      dispatch(authorRemoved(author));
    } else {
      dispatch(authorSelected(author));
    }
    dispatch(chnagePostPageWise(1));
    if (!match) {
      navigate('/');
    }
  };
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${id}`}>
          <img src={thumbnail} className="object-cover" alt={title} />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {duration}
        </p>
      </div>
      <div className="flex flex-col w-full">
        <Link to={`./videos/${id}`}>
          <p className="text-slate-900 text-sm font-semibold">{title}</p>
        </Link>
        <div
          onClick={handelAuthor}
          className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
        >
          {author}
        </div>
        <p className="text-gray-400 text-xs mt-1">
          {views} . {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoItem;
