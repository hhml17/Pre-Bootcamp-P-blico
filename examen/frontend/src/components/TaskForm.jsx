// src/components/TaskForm.jsx
import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskForm.css'; // Importa el archivo CSS para los estilos

const TaskForm = ({ onTaskCreated }) => {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new Date(dueDate) < new Date()) {
      setError('La fecha límite no puede estar en el pasado.');
      return;
    }
    try {
      const newTask = { description, dueDate };
      await api.post('/tasks', newTask);
      setDescription('');
      setDueDate('');
      setError('');
      onTaskCreated(); // Actualiza la lista de tareas
      navigate('/homeapp'); // Redirige después de crear la tarea
    } catch (error) {
      console.error("Error al crear tarea:", error);
      setError("Hubo un error al crear la tarea.");
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <h2>Agregar Tarea</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          required
          className="task-input"
        />
        <input
          type="date"
          value={dueDate}
          min={new Date().toISOString().split("T")[0]} // Evita fechas en el pasado
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="task-input"
        />
        <button type="submit" className="task-button">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;