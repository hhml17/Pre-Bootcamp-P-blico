// src/components/NoteList/NoteListContainer.jsx
import React from 'react';
import NoteList from './NoteList';
import { useNotesContext } from '../../context/NotesContext';

const NoteListContainer = () => {
  const { state, dispatch } = useNotesContext();
  const filteredNotes = state.notes.filter((note) =>
    state.filter === 'Todas' ? true : note.priority === state.filter
  );

  const deleteNote = (index) => {
    dispatch({ type: 'DELETE_NOTE', payload: index });
  };

  return <NoteList notes={filteredNotes} deleteNote={deleteNote} />;
};

export default NoteListContainer;
