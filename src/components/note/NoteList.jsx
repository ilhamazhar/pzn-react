import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";

const NoteList = () => {
  const [search, setSearch] = useState("");
  const notes = useContext(NoteContext);
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtering notes...");

    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  const handleSearch = () => {
    console.log("Searching notes...", searchInput.current.value);

    setSearch(searchInput.current.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" ref={searchInput} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
