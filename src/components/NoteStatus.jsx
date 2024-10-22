import Message from "./Message";

function NoteStatus({ notes }) {
  // derived state
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const unCompletedNotes = allNotes - completedNotes;
  if (!allNotes)
    return (
      <Message icon="❗" text="No Note has already been added">
        <p>No Notes has already been added</p>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
