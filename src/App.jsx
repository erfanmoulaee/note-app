import { useState } from "react";
import "./App.css";
import AddNewNotes from "./components/AddNewNotes";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDelete = (id) => {
    // const filteredNote = notes.filter((note) => note.id !== id);
    // setNotes(filteredNote);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNotes onAddNotes={handleAddNotes} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
