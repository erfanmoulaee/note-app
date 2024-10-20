import { useState } from "react";
import "./App.css";
import AddNewNotes from "./components/AddNewNotes";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    console.log(newNote);
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNotes onAddNotes={handleAddNotes} />
        <div className="note-container">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
