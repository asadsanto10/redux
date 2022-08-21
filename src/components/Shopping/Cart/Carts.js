import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const Carts = () => {
  const carts = useSelector((state) => state.cart);

  const totalPrice = carts.cart.reduce((prevTotal, currentProduct) => {
    return prevTotal + currentProduct.productPrice * currentProduct.productQunetity;
  }, 0);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {carts.cart.map((cart) => (
          <Cart key={cart.id} {...cart} />
        ))}

        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{carts.totalItem}</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">
              TK. {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
