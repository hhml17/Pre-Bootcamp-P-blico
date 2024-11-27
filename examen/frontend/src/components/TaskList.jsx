// src/components/TaskList.jsx
import React from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onTaskDeleted, onTaskUpdated }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      onTaskDeleted(id);
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/tasks/${id}`, { status: newStatus });
      onTaskUpdated();
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };

  return (
    <div className="task-columns">
      <div>
        <h3>Tareas Pendientes</h3>
        {tasks.filter(task => task.status === 'pending').map((task) => (
          <div key={task._id} className="task-card">
            <p>{task.description}</p>
            <p>Fecha límite: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={() => navigate(`/homeapp/edit/${task._id}`)}>Editar</button>
            <button onClick={() => handleStatusChange(task._id, 'in-progress')}>Comenzar Tarea</button>
            <button onClick={() => handleDelete(task._id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Tareas en Proceso</h3>
        {tasks.filter(task => task.status === 'in-progress').map((task) => (
          <div key={task._id} className="task-card">
            <p>{task.description}</p>
            <p>Fecha límite: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={() => navigate(`/homeapp/edit/${task._id}`)}>Editar</button>
            <button onClick={() => handleStatusChange(task._id, 'completed')}>Completar</button>
            <button onClick={() => handleDelete(task._id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Tareas Completadas</h3>
        {tasks.filter(task => task.status === 'completed').map((task) => (
          <div key={task._id} className="task-card">
            <p>{task.description}</p>
            <p>Fecha límite: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={() => navigate(`/homeapp/edit/${task._id}`)}>Editar</button>
            <button onClick={() => handleDelete(task._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;