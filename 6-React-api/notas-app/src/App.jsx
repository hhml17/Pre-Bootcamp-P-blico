// src/App.jsx
import React from 'react';
import './App.css';
import { NotesProvider } from './context/NotesContext';
import NoteFormContainer from './components/NoteForm/NoteFormContainer';
import NoteListContainer from './components/NoteList/NoteListContainer';
import NoteFilterContainer from './components/NoteFilter/NoteFilterContainer';

const App = () => {
  return (
    <NotesProvider>
      <div className="app">
        <NoteFormContainer />
        <NoteFilterContainer />
        <NoteListContainer />
      </div>
    </NotesProvider>
  );
};

export default App;
