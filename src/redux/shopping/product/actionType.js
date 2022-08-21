import { ADDCARTPRODUCT, DECREASEPRODUCT } from './action';

export const addProduct = (id, quentity) => {
  return {
    type: ADDCARTPRODUCT,
    payload: { id, quentity },
  };
};

export const decreaseProduct = (id, quentity) => {
  return {
    type: DECREASEPRODUCT,
    payload: { id, quentity },
  };
};
