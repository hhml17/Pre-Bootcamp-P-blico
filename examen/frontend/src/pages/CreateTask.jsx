import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTask = () => {
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
      await axios.post('/api/tasks', { description, dueDate });
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Error al crear la tarea');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Tarea</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default CreateTask;
