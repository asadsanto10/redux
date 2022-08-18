import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';
import {
  decrement as dynamicDecrement,
  // eslint-disable-next-line prettier/prettier
  increment as dynamicIncrement
} from '../redux/dynamicCounter/actions';

function VariableCounter({ counter, incrementCounter, decrementCounter }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{counter}</div>
      <div className="flex space-x-3">
        <button
          onClick={incrementCounter}
          type="button"
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={decrementCounter}
          type="button"
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToPropos = (state, ownProps) => {
  return {
    counter: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCounter: ownProps.dynamic
      ? () => dispatch(dynamicIncrement(5))
      : () => dispatch(increment()),
    decrementCounter: ownProps.dynamic
      ? () => dispatch(dynamicDecrement(2))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToPropos, mapDispatchToProps)(VariableCounter);
