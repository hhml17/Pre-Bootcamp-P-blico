import React from 'react';

function App() {
  // Lista de cosas por hacer
  const tareas = [
    'Aprender React',
    'Practicar con Vite',
    'Construir proyectos increíbles'
  ];

  return (
    <div className="container">
      <h1 className="titulo-principal">¡Bienvenido a mi aplicación de React!</h1>
      <h2 className="subtitulo">Lista de cosas por hacer:</h2>
      <ul className="lista-tareas">
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea">
            {tarea}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
  
