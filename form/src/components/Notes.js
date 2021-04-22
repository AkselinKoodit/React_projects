import React from "react";

const Notes = ({ notes }) => {
  return (
    <div>
      <h1>My json data</h1>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.message}
              {note.role}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notes;
