// src/components/Form.jsx
import React, { useState } from 'react';

const Form = ({ addNote, setFilter }) => {
  const [noteText, setNoteText] = useState('');
  const [priority, setPriority] = useState('Baja');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText, priority);
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu nota"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Agregar Nota</button>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
    </form>
  );
};

export default Form;
