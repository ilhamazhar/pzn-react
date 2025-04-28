import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

const GuestBook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMessage("");
    nameInput.current.focus();

    alert(`Name: ${name}, Message: ${message}`);
  };

  return (
    <>
      <h1>Guest Book</h1>
      <form action="">
        <GuestBookForm name={name} setName={setName} ref={nameInput} />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleOnSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default GuestBook;
