// eslint-disable-next-line import/named
import { DECREMENT, INCREMENT } from './actionsType';

const initialState = {
  value: 0,
};

const counterReducer = (action, state = initialState) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
