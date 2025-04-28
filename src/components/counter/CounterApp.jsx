import { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [show, setShow] = useState(true);

  const handleOnChange = (e) => {
    setShow(e.target.checked);
  };

  return (
    <>
      <Counter name="Hanabi" />
      <br />
      <label>
        <input type="checkbox" checked={show} onChange={handleOnChange} />
        Tampilkan Counter
      </label>
      {show ? <Counter name="Yuli" /> : <Counter name="Hanabi" />}
    </>
  );
};

export default CounterApp;
