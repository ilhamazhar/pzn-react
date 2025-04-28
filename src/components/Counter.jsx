import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          console.log("Button clicked!");
          console.log("Count value", count);
        }}
      >
        Increment
      </button>
      <h2>Counter: {count}</h2>
    </>
  );
};

export default Counter;
