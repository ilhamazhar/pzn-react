import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NoteContext, NotesDispatcherContext } from "./NoteContext";

let id = 0;
const initialNotes = [
  { id: id++, text: "Belajar React", done: false },
  { id: id++, text: "Belajar React Router", done: false },
  { id: id++, text: "Belajar React Redux", done: false },
];

const notesReducer = (draft, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
      break;
    case "CHANGE_NOTE": {
      const index = draft.findIndex((note) => note.id === action.id);
      if (index !== -1) {
        draft[index].text = action.text;
        draft[index].done = action.done;
      }
      break;
    }
    case "DELETE_NOTE": {
      const index = draft.findIndex((note) => note.id === action.id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
      break;
    }
    default:
      break;
  }
};

const NoteApp = () => {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <NoteContext.Provider value={notes}>
      <NotesDispatcherContext.Provider value={dispatch}>
        <h1>Note App</h1>
        <NoteForm />
        <NoteList />
      </NotesDispatcherContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteApp;
