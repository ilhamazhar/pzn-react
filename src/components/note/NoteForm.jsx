import { useContext, useState } from "react";
import { NotesDispatcherContext } from "./NoteContext";

const NoteForm = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatcherContext);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    dispatch({ type: "ADD_NOTE", text });
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Note"
        value={text}
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>Add</button>
    </>
  );
};

export default NoteForm;
