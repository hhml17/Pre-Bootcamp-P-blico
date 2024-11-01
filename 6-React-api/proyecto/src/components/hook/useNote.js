import { useState } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('Todas');

  // Función para agregar una nueva nota
  const addNote = (text, priority) => {
    const newNote = { text, priority, id: Date.now() };
    setNotes([...notes, newNote]);
  };

  // Función para eliminar una nota por su ID
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  // Filtrar las notas según la prioridad seleccionada
  const filteredNotes = notes.filter(note => filter === 'Todas' || note.priority === filter);

  return {
    notes: filteredNotes,
    addNote,
    deleteNote,
    setFilter,
  };
};

export default useNotes;
