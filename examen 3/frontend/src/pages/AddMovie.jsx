// src/pages/AddMovie.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Movie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState({}); // Estado para errores
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Por favor proporcione el título de la película";
    if (!year) newErrors.year = "Por favor proporcione el año de lanzamiento";
    if (!director) newErrors.director = "Por favor proporcione el director de la película";
    if (!genre) newErrors.genre = "Por favor proporcione género";
    if (!imageUrl) {
      newErrors.imageUrl = "Por favor proporcione una URL válida con la imagen";
    } else if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(imageUrl)) {
      newErrors.imageUrl = "La URL de la imagen debe terminar en una extensión de imagen válida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/movies',
        { title, director, year, genre, imageUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate('/homeapp');
    } catch (error) {
      console.error('Error al agregar la película', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Agregar Película</h1>
      <div className="form-field">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="form-input"
        />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>
      <div className="form-field">
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          placeholder="Director"
          className="form-input"
        />
        {errors.director && <p className="error-text">{errors.director}</p>}
      </div>
      <div className="form-field">
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año de lanzamiento"
          className="form-input"
        />
        {errors.year && <p className="error-text">{errors.year}</p>}
      </div>
      <div className="form-field">
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Género"
          className="form-input"
        />
        {errors.genre && <p className="error-text">{errors.genre}</p>}
      </div>
      <div className="form-field">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="URL de la imagen"
          className="form-input"
        />
        {errors.imageUrl && <p className="error-text">{errors.imageUrl}</p>}
      </div>
      <button type="submit" className="submit-button">Agregar</button>
    </form>
  );
};

export default AddMovie;
