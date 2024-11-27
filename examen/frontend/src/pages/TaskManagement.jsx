// src/pages/TaskManagement.jsx
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import api from '../api/api';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskDeleted = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  const handleTaskUpdated = () => {
    fetchTasks();
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} onTaskUpdated={handleTaskUpdated} />
    </div>
  );
};

export default TaskManagement;