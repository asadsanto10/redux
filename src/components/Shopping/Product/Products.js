import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const Products = () => {
  // initially get all product
  const allProducts = useSelector((state) => state.product);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {allProducts.products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
