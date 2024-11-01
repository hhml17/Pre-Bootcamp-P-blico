// src/components/NoteFilter/NoteFilter.jsx
import React from 'react';
import './NoteFilter.css';

const NoteFilter = ({ filterPriority, setFilterPriority }) => {
  return (
    <div className="note-filter">
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>
  );
};

export default NoteFilter;
