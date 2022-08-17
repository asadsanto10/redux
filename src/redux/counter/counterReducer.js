import { DECREMENT, INCREMENT } from './actionsType';

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    default:
      return state;
  }
};

export default counterReducer;
