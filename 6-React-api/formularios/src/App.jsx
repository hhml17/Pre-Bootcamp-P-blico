// src/App.jsx
import React from 'react';
import './App.css';
import SuperheroForm from './components/SuperheroForm';

const App = () => {
  return (
    <div className="app">
      <h1>Bienvenido a la Liga de Superhéroes</h1>
      <SuperheroForm />
    </div>
  );
}

export default App;
