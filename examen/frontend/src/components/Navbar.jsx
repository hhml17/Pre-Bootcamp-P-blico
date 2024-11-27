// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AuthContext);

  const onLogout = () => {
    handleLogout();
    navigate('/login'); // Redirige a la página de inicio de sesión después de cerrar sesión
  };

  return (
    <nav className="navbar">
      {!user && (
        <Link to="/">
          <button className="navbar-button">Inicio</button>
        </Link>
      )}
      {user ? (
        <>
          <Link to="/homeapp">
            <button className="navbar-button">Todas las Tareas</button>
          </Link>
          <Link to="/homeapp/add">
            <button className="navbar-button">Agregar Tarea</button>
          </Link>
          <button onClick={onLogout} className="navbar-button">Cerrar Sesión</button>
        </>
      ) : (
        <>
          {location.pathname === '/' && (
            <Link to="/login">
              <button className="navbar-button">Iniciar Sesión</button>
            </Link>
          )}
          {location.pathname === '/login' && (
            <Link to="/register">
              <button className="navbar-button">Registrarse</button>
            </Link>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;