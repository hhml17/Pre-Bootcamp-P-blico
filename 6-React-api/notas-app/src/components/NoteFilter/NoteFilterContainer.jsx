// src/components/NoteFilter/NoteFilterContainer.jsx
import React from 'react';
import NoteFilter from './NoteFilter';
import { useNotesContext } from '../../context/NotesContext';

const NoteFilterContainer = () => {
  const { dispatch } = useNotesContext();

  const setFilterPriority = (priority) => {
    dispatch({ type: 'SET_FILTER', payload: priority });
  };

  return <NoteFilter setFilterPriority={setFilterPriority} />;
};

export default NoteFilterContainer;
