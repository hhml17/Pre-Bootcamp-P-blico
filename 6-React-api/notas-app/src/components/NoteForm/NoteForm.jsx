// src/components/NoteForm/NoteForm.jsx
import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Baja');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote({
        text,
        priority
      });
      setText('');
      setPriority('Baja');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Notas</h2>
      <input
        type="text"
        placeholder="Escribe tu nota"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
