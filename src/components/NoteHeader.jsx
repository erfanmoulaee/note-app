import { useState } from "react";

const NoteHeader = ({ notes, sortBy, onSort }) => {
  return (
    <div className="note-header">
      <h2>My Notes ({notes.length})</h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort Based on latest notes</option>
        <option value="earliest">Sort Based on earliest notes</option>
        <option value="completed">Sort Based on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
