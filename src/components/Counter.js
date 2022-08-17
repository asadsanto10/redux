import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

function Counter({ counter, incrementCounter, decrementCounter }) {
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
  console.log(ownProps);

  return {
    counter: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (value) => dispatch(increment(value)),
    decrementCounter: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToPropos, mapDispatchToProps)(Counter);
