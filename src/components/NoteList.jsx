import React from "react";

function NoteList({ notes, onDelete, onCompleted }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
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
          <button onClick={() => onDelete(note.id)}> ❌</button>
          <input type="checkbox" name={note.id} id={note.id} value={note.id} onChange={onCompleted} />
        </div>
      </div>
      <div className="note-item__footer">{new Date(note.createdAt).toLocaleDateString("en-US", options)}</div>
    </div>
  );
}
