// src/pages/HomeApp.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import TaskManagement from './TaskManagement';

const HomeApp = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Bienvenido de vuelta {user?.name}!</h2> {/* Muestra el nombre del usuario */}
      <TaskManagement />
    </div>
  );
};

export default HomeApp;