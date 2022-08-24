/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import BlogPost from './BlogPost';

const BlogPosts = () => {
  const { posts } = useSelector((state) => state);

  const { postFilter } = useSelector((state) => state);
  // console.log(posts);

  // filter by search
  const filterBysearch = (post) => {
    if (postFilter.searchText.length > 0) {
      // const a = post.title.toLowerCase().match(postFilter.searchText.toLowerCase());

      return (
        post.title.toLowerCase().includes(postFilter.searchText.toLowerCase()) ||
        post.author.toLowerCase().includes(postFilter.searchText.toLowerCase())
      );
    }
    return true;
  };

  // filter by category
  const filterByCategory = (post) => {
    if (postFilter.categories.length > 0) {
      const categoriesTitle = post?.categories?.reduce(
        (prevCategorie, categorie) => categorie.title,
        false
      );
      return postFilter.categories.includes(categoriesTitle);
    }
    return true;
  };

  // filter by author
  const filterByAuthor = (post) => {
    if (postFilter.author.length > 0) {
      return postFilter.author.includes(post?.author);
    }
    return true;
  };

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-full" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            ALL BLOGS ARE HERE
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
            atque, ducimus sed.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* single card */}
          {posts
            .filter(filterBysearch)
            .filter(filterByCategory)
            .filter(filterByAuthor)
            .map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
