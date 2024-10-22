import React from "react";

function NoteList({ notes, onDelete, onCompleted, sortBy }) {
  let sortNotes = notes;
  switch (sortBy) {
    case "earliest": {
      sortNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    }
    case "latest": {
      sortNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    }
    case "completed": {
      sortNotes = [...notes].sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
      break;
    }
  }
  return (
    <div className="note-list">
      {sortNotes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onCompleted={onCompleted} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.isCompleted ? "completed" : ""} `}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type="checkbox" name={note.id} id={note.id} value={note.id} onChange={onCompleted} />
        </div>
      </div>
      <div className="note-item__footer">{new Date(note.createdAt).toLocaleDateString("en-US", options)}</div>
    </div>
  );
}
