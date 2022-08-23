import React from 'react';
import Category from './Category';

const BlogPost = ({ id, title, categories, bgImage, author, authorImage, date, readTime }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={bgImage} alt="" />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {categories.map((category) => (
              <Category key={category.id} {...category} />
            ))}
          </p>
          <a href="#" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={authorImage} alt="" />
          </div>
          <div className="ml-3">
            <p className="cursor-pointer text-sm font-medium text-gray-900 hover:underline">
              {author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{date}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {readTime} read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
