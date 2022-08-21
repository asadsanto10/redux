import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, increaseProductQuentity } from '../../../redux/shopping/cart/action';
import { addProduct } from '../../../redux/shopping/product/actionType';

const Product = ({ id, productName, productPrice, productQuantity }) => {
  const { products } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // add product to cart handeler
  const addProductHandeler = (productId) => {
    if (cart.cart.find((cartId) => cartId.id === productId)) {
      dispatch(increaseProductQuentity(productId));
      dispatch(addProduct(productId, 1));
    } else {
      dispatch(addTocart(productId, productName, productPrice, 1));
      dispatch(addProduct(productId, 1));
    }

    // dispatch(addTocart(productId, productName, productPrice));
    // dispatch(addProduct(productId, 1));
  };

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {productName}
            {products.find((product) => product.id === id).productQuantity > 0 ? (
              `(${productQuantity})`
            ) : (
              <span
                className="
            text-xs md:text-sm text-red-600 px-1 py-1"
              >
                (Stock Out)
              </span>
            )}
          </p>
          <p className="text-gray-400 text-base">
            Tk {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <div className="text-lg font-semibold">
          <button
            onClick={() => addProductHandeler(id)}
            type="button"
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
