import React from 'react';
import BlogPosts from './BlogPosts';

import Footer from './Footer';
import Navigation from './Navigation';
import Search from './Search';

const index = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default index;
