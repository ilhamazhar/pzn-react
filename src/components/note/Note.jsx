import { useContext, useState } from "react";
import { NotesDispatcherContext } from "./NoteContext";

const Note = ({ note }) => {
  const dispatch = useContext(NotesDispatcherContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnChangeText = (e) => {
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
      text: e.target.value,
    });
  };

  const handleOnChangeDone = (e) => {
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
      done: e.target.checked,
    });
  };

  const handleOnDelete = () => {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  };

  let component;
  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleOnChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleOnChangeDone}
      />
      {component}
      <button onClick={handleOnDelete}>Delete</button>
    </label>
  );
};

export default Note;
