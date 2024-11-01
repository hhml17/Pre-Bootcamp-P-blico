// src/components/SuperNoteContainer.jsx

import React, { useReducer } from 'react';
// Usando el alias '@' para apuntar a la carpeta 'src'
import { noteReducer, initialState } from '../reducers/NoteReducer';

import Form from './Form';
import NoteList from './NoteList';

const SuperNoteContainer = () => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  const addNote = (text, priority) => {
    dispatch({ type: 'ADD_NOTE', payload: { text, priority } });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: { id } });
  };

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: { filter } });
  };

  const filteredNotes = state.notes.filter(note => state.filter === 'Todas' || note.priority === state.filter);

  return (
    <div className="app">
      <h1>Super Notas</h1>
      <Form addNote={addNote} setFilter={setFilter} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default SuperNoteContainer;
