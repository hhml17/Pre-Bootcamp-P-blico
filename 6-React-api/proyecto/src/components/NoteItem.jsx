// src/components/NoteItem.jsx
import React from 'react';

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span>{note.text} - {note.priority}</span>
      <button onClick={() => deleteNote(note.id)} style={{ backgroundColor: 'red', color: 'white' }}>
        Eliminar
      </button>
    </div>
  );
};

export default NoteItem;
