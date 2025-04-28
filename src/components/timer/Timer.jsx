import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  const handleOnStart = () => {
    if (timer.current) clearInterval(timer.current);
    const time = Date.now();
    setStart(time);
    setNow(time);

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleOnStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const elapsed = start && now ? now - start : 0;

  return (
    <>
      <h1>Time: {elapsed}ms</h1>
      <button onClick={handleOnStart}>Start</button>
      <button onClick={handleOnStop}>Stop</button>
    </>
  );
};

export default Timer;
