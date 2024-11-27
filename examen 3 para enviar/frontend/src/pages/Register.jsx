// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validaciones adicionales
    if (name.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }

    if (lastName.length < 3) {
      setError('El apellido debe tener al menos 3 caracteres');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    try {
      const response = await axios.post('/api/users/register', { name, lastName, email, password });
      
      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', response.data.token);

      // Mostrar mensaje de éxito y redirigir al usuario a la página inicial
      setSuccess('Registro exitoso, ahora puedes iniciar sesión');
      setTimeout(() => {
        navigate('/homeapp');
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || 'Error en el registro');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} noValidate className="register-form">
        <h2>Registrarse</h2>
        {error && <p className="register-error-message">{error}</p>}
        {success && <p className="register-success-message">{success}</p>}
        
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
          autoComplete="given-name"
        />
        
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Apellido"
          required
          autoComplete="family-name"
        />
        
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          autoComplete="email"
        />
        
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          autoComplete="new-password"
        />
        
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar contraseña"
          required
          autoComplete="new-password"
        />
        
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
