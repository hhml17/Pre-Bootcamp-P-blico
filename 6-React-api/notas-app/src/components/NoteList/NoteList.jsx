// src/components/NoteList/NoteList.jsx
import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note-item">
          <p>{note.text} - {note.priority}</p>
          <button onClick={() => deleteNote(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
