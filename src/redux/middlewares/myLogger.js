import rootReducer from '../rootReducer';

const myLogger = (store) => (next) => (action) => {
  console.log(`Before`, JSON.stringify(store.getState()));
  console.log(`action`, JSON.stringify(action));

  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(`upCommingReducer`, JSON.stringify(upcommingState));

  return next(action);
};
export default myLogger;
