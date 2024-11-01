// src/components/NoteForm/NoteFormContainer.jsx
import React from 'react';
import NoteForm from './NoteForm';
import { useNotesContext } from '../../context/NotesContext';

const NoteFormContainer = () => {
  const { dispatch } = useNotesContext();

  const addNote = (note) => {
    dispatch({ type: 'ADD_NOTE', payload: note });
  };

  return <NoteForm addNote={addNote} />;
};

export default NoteFormContainer;
