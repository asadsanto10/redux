import { combineReducers } from 'redux';
import cartReducer from './shopping/cart/cartReducer';
import productReducer from './shopping/product/productReducer';

const rootReducer = combineReducers({
  // counter: counterReducer,
  // dynamicCounter: dynamicCounterReducer,

  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
