// src/components/EditTaskForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditTaskForm.css';

const EditTaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/tasks/${id}`);
        setDescription(response.data.description);
        setDueDate(new Date(response.data.dueDate).toISOString().split('T')[0]);
      } catch (error) {
        console.error("Error al obtener la tarea:", error);
        setError("Error al cargar la tarea.");
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tasks/${id}`, { description, dueDate });
      navigate('/homeapp'); // Redirige a la lista de tareas después de editar
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
      setError("Hubo un error al actualizar la tarea.");
    }
  };

  return (
    <div className="edit-task-form-container">
      <form onSubmit={handleSubmit} className="edit-task-form">
        <h2>Editar Tarea</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          required
          className="edit-task-input"
        />
        <input
          type="date"
          value={dueDate}
          min={new Date().toISOString().split("T")[0]} // Evita fechas en el pasado
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="edit-task-input"
        />
        <button type="submit" className="edit-task-button">Actualizar</button>
      </form>
    </div>
  );
};

export default EditTaskForm;