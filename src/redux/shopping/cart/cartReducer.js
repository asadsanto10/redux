/* eslint-disable prettier/prettier */
import {
  ADDTOCART,
  PRODUCTDECREASEQUENTITY,
  PRODUCTINCREASEQUENTITY,
  REMOVETOCART
} from './actionType';

const initialState = {
  totalItem: 0,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItem: state.totalItem > 0 ? state.totalItem + 1 : 1,
      };

    case PRODUCTINCREASEQUENTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQunetity: product.productQunetity ? product.productQunetity + 1 : 1,
            };
          }
          return product;
        }),
        totalItem: state.totalItem + 1,
      };

    case PRODUCTDECREASEQUENTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQunetity: product.productQunetity - 1,
            };
          }
          return product;
        }),
        totalItem: state.totalItem - 1,
      };

    case REMOVETOCART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        totalItem: state.totalItem - 1,
      };


    default:
      return state;
  }
};

export default cartReducer;
