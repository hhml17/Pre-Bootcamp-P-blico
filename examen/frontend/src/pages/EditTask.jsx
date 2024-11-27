import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${id}`);
        setDescription(response.data.description);
      } catch (error) {
        setError('Error al cargar la tarea');
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/tasks/${id}`, { description });
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Error al actualizar la tarea');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Tarea</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditTask;
