import {
  ADDTOCART,
  // eslint-disable-next-line prettier/prettier
  PRODUCTDECREASEQUENTITY, PRODUCTINCREASEQUENTITY, REMOVETOCART
} from './actionType';

export const addTocart = (id, productName, productPrice, productQunetity) => {
  return {
    type: ADDTOCART,
    payload: {
      id,
      productName,
      productPrice,
      productQunetity,
    },
  };
};

export const removeTocart = (id) => {
  return {
    type: REMOVETOCART,
    payload: {
      id,
    },
  };
};

export const increaseProductQuentity = (id) => {
  return {
    type: PRODUCTINCREASEQUENTITY,
    payload: {
      id,
    },
  };
};

export const decreaseProductQuentity = (id) => {
  return {
    type: PRODUCTDECREASEQUENTITY,
    payload: {
      id,
    },
  };
};
