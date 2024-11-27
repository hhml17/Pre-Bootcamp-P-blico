// src/pages/EditBook.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/AddEditBook.css';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setYear(book.year);
        setImageUrl(book.imageUrl);
      } catch (error) {
        console.error('Error al cargar los datos del libro', error);
      }
    };
    fetchBook();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Por favor proporcione el título del libro";
    if (!author) newErrors.author = "Por favor proporcione el autor del libro";
    if (!genre) newErrors.genre = "Por favor proporcione el género del libro";
    if (!year) newErrors.year = "Por favor proporcione el año de publicación";
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
      await axios.put(`/api/books/${id}`, { title, author, genre, year, imageUrl });
      navigate('/homeapp');
    } catch (error) {
      console.error('Error al actualizar el libro', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Editar Libro</h1>

      <div className="form-field">
        <label>Título</label>
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
        <label>Autor</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Autor"
          className="form-input"
        />
        {errors.author && <p className="error-text">{errors.author}</p>}
      </div>

      <div className="form-field">
        <label>Género</label>
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
        <label>Año de publicación</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año de publicación"
          className="form-input"
        />
        {errors.year && <p className="error-text">{errors.year}</p>}
      </div>

      <div className="form-field">
        <label>URL de la imagen</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="URL de la imagen"
          className="form-input"
        />
        {errors.imageUrl && <p className="error-text">{errors.imageUrl}</p>}
      </div>

      <button type="submit" className="submit-button">Actualizar Libro</button>
    </form>
  );
};

export default EditBook;
