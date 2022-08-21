import { ADDCARTPRODUCT, DECREASEPRODUCT } from './action';

const initialState = {
  products: [
    {
      id: 1,
      productName: 'Asus Vivobook X515MA',
      productPrice: 35000,
      productQuantity: 20,
    },
    {
      id: 2,
      productName: 'Dell E1916HV 18.5 Inch',
      productPrice: 9300,
      productQuantity: 35,
    },
    {
      id: 3,
      productName: 'Canon Eos 4000D 18MP',
      productPrice: 36500,
      productQuantity: 72,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCARTPRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQuantity: product.productQuantity - action.payload.quentity,
            };
          }

          return product;
        }),
      };
    case DECREASEPRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQuantity: product.productQuantity + action.payload.quentity,
            };
          }

          return product;
        }),
      };

    default:
      return state;
  }
};

export default productReducer;
