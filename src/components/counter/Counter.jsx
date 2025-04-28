import { useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>
        Counter {name}: {count}
      </h1>
      <button onClick={handleOnClick}>Increment</button>
    </>
  );
};

export default Counter;
