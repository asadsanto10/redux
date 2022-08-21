/* eslint-disable consistent-return */
import rootReducer from '../rootReducer';
import {
  ADDTOCART,
  PRODUCTDECREASEQUENTITY,
  PRODUCTINCREASEQUENTITY,
  // eslint-disable-next-line prettier/prettier
  REMOVETOCART
} from '../shopping/cart/actionType';
import { ADDCARTPRODUCT, DECREASEPRODUCT } from '../shopping/product/action';

const shoppingMiddlewares = (store) => (next) => (action) => {
  // previous state
  const prevState = store.getState();
  // next state
  const { product } = [action].reduce(rootReducer, store.getState());

  if (
    action.type === ADDTOCART ||
    action.type === PRODUCTINCREASEQUENTITY ||
    action.type === ADDCARTPRODUCT
  ) {
    if (
      product.products.find((singleProduct) => singleProduct.id === action.payload.id)
        .productQuantity < 0
    ) {
      return;
    }
  }

  const totalProductQuantity = prevState.product.products.find(
    (singleProduct) => singleProduct.id === action.payload.id
  ).productQuantity;

  if (
    (action.type === ADDTOCART ||
      action.type === PRODUCTINCREASEQUENTITY ||
      action.type === ADDCARTPRODUCT) &&
    totalProductQuantity > 0
  ) {
    return next(action);
  }
  if (
    (action.type === PRODUCTDECREASEQUENTITY ||
      action.type === DECREASEPRODUCT ||
      action.type === REMOVETOCART) &&
    (totalProductQuantity === 0 || totalProductQuantity > 0)
  ) {
    return next(action);
  }
};

export default shoppingMiddlewares;
