/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter } from '../../features/filter/filterSlice';
import { fetchTags } from '../../features/tags/tagsSlice';
import Tag from './Tag';

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const { tags: filterTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  // console.log(tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const clearFilterHandler = () => {
    if (filterTags?.length > 0) dispatch(clearFilter());
  };

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags?.map((tag) => (
          <Tag key={tag.id} {...tag} />
        ))}

        <div
          onClick={clearFilterHandler}
          className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer ml-16"
        >
          Clear Filter
        </div>
      </div>
    </section>
  ) : null;
};

export default Tags;
