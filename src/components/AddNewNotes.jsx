import React, { useState } from "react";
import "../App.css";

function AddNewNotes({ onAddNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNotes = {
      title,
      description,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };
    onAddNotes(newNotes);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input type="text" className="text-field" placeholder="note title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="text-field" placeholder="note description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNotes;
