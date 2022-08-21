import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuentity,
  increaseProductQuentity,
  // eslint-disable-next-line prettier/prettier
  removeTocart
} from '../../../redux/shopping/cart/action';
import { addProduct, decreaseProduct } from '../../../redux/shopping/product/actionType';

const Cart = ({ id, productName, productPrice, productQunetity }) => {
  const dispatch = useDispatch();

  // product increase
  const productIncreaseHandler = (productId) => {
    dispatch(increaseProductQuentity(productId));
    dispatch(addProduct(productId, 1));
  };
  // console.log(productQunetity);

  // product decrease
  const productDecreaseHandler = (productId) => {
    if (productQunetity > 1) {
      dispatch(decreaseProductQuentity(productId));
      dispatch(decreaseProduct(productId, 1));
    } else {
      dispatch(removeTocart(productId, 1));
      dispatch(decreaseProduct(productId, 1));
    }
  };

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{productName}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            onClick={() => productDecreaseHandler(id)}
            type="button"
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
            </svg>
          </button>
          <p>{productQunetity}</p>
          <button
            onClick={() => productIncreaseHandler(id)}
            type="button"
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
