import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../assets/redux/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3>Counter : {counter}</h3>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <hr />
      <button onClick={() => dispatch(decrement(3))}>-3</button>
      <button onClick={() => dispatch(increment(3))}>+3</button>
    </>
  );
};

export default Counter;
