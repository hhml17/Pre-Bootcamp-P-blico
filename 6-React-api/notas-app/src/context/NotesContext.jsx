// src/context/NotesContext.jsx
import React, { createContext, useContext, useReducer } from 'react';
import { notesReducer, initialState } from '../reducers/notesReducer';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
