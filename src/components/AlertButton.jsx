import React, { useRef } from "react";

const AlertButton = ({ text, message }) => {
  const counter = useRef(0);

  const handleOnClick = (e) => {
    console.log(e);
    alert(`${message} ${counter.current++}`);
  };

  return <button onClick={handleOnClick}>{text}</button>;
};

export default AlertButton;
