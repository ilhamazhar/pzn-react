import React from "react";

const HelloForm = () => {
  return (
    <>
      <form>
        <input type="name" />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("Hello " + e.target.previousSibling.value + "!");
            e.target.previousSibling.value = "";
          }}
        >
          Say Hello
        </button>
      </form>
      <h2>Hallo World</h2>
    </>
  );
};

export default HelloForm;
