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

  const handleComplete = (e) => {
    const NoteId = Number(e.target.value);
    // const findItem = notes.find((note) => note.id === NoteId);
    // console.log(findItem);
    // findItem.isCompleted = !findItem.isCompleted;
    // setNotes([findItem]);
    setNotes((prevNotes) => prevNotes.map((note) => (note.id ? { ...note, isCompleted: !note.isCompleted } : note)));
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNotes onAddNotes={handleAddNotes} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDelete} onCompleted={handleComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
