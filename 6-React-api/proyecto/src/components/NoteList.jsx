// src/components/NoteList.jsx
import React from 'react';
import NoteItem from './noteItem';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />

      ))}
    </div>
  );
};

export default NoteList;
