// src/components/SuperheroForm/SuperheroForm.jsx
import React, { useState } from 'react';
import './SuperheroForm.css';

const SuperheroForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [superheroes, setSuperheroes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (formData.nombre && formData.nombre.length < 4) {
      errors.nombre = 'El nombre debe tener al menos 4 caracteres.';
    }

    if (formData.apellido && formData.apellido.length < 4) {
      errors.apellido = 'El apellido debe tener al menos 4 caracteres.';
    }

    if (formData.email && formData.email.length < 10) {
      errors.email = 'El correo electrónico es muy corto.';
    }

    if (formData.password && formData.password.length < 12) {
      errors.password = 'La contraseña debe tener al menos 12 caracteres.';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Agregar el superhéroe a la lista
      setSuperheroes([...superheroes, formData]);

      // Limpiar los campos del formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      // Cambiar el estado de enviado
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <h2>{submitted ? 'Superhéroe Registrado' : 'Registro de Superhéroes'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        
        <label>Apellido:</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        {errors.apellido && <p className="error">{errors.apellido}</p>}
        
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label>Contraseña:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        {errors.password && <p className="error">{errors.password}</p>}
        
        <label>Confirmar Contraseña:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        
        <button type="submit">Crear Superhéroe</button>
      </form>
      
      <h3>Lista de Superhéroes Registrados</h3>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            {hero.nombre} {hero.apellido} - {hero.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroForm;
