import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

function HooksCounter() {
  const counter = useSelector((state) => state.value);
  // console.log(counter);
  const dispatch = useDispatch();

  const incrementCounter = (value) => {
    dispatch(increment(value));
  };
  const decrementCounter = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{counter}</div>
      <div className="flex space-x-3">
        <button
          onClick={() => incrementCounter(5)}
          type="button"
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={() => decrementCounter(2)}
          type="button"
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
