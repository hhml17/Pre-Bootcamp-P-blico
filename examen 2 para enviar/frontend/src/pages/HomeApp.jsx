import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeApp.css';

const HomeApp = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setMovies(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate('/login');
        }
      }
    };
    fetchMovies();
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/movies/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMovies(movies.filter(movie => movie._id !== id));
    } catch (error) {
      console.error('Error al eliminar la película');
    }
  };

  const handleDetail = (id) => {
    navigate(`/movies/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/movies/edit/${id}`);
  };

  return (
    <div className="homeapp-container">
      <h2>Bienvenido de vuelta, {user?.name}!</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <h3>{movie.title}</h3>
            <img
  src={movie.imageUrl ? movie.imageUrl : 'https://via.placeholder.com/150'}
  alt={movie.title}
  className="movie-image"
/>


            <p><strong>Calificación:</strong> {movie.rating}</p>
            <div className="movie-actions">
              <button onClick={() => handleDetail(movie._id)} className="detail-button">Detalle</button>
              {user?.id === movie.userId && (
                <>
                  <button onClick={() => handleDelete(movie._id)} className="delete-button">Eliminar</button>
                  <button onClick={() => handleEdit(movie._id)} className="edit-button">Editar</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeApp;
