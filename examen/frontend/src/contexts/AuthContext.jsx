// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login, logout } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName'); // Guardo el nombre del usuario
    if (token && userName) {
      setUser({ token, name: userName }); // Incluye el nombre en el estado del usuario
    }
  }, []);

  const handleLogin = async (email, password) => {
    const data = await login(email, password);
    setUser({ token: data.token, name: data.user.name });
    localStorage.setItem('token', data.token);
    localStorage.setItem('userName', data.user.name); // Guarda el nombre del usuario en localStorage
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); // Elimina el nombre del usuario en el logout
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};