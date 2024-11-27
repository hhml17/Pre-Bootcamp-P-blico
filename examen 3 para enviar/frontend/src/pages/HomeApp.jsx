// src/pages/HomeApp.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeApp.css';

const HomeApp = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate('/login');
        }
      }
    };
    fetchBooks();
  }, [navigate]);

  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };

  return (
    <div className="homeapp-container">
      <h2>Bienvenido de vuelta, {user?.name}!</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img
              src={book.imageUrl ? book.imageUrl : 'https://via.placeholder.com/150'}
              alt={book.title}
              className="book-image"
            />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Año de publicación:</strong> {book.year}</p>
              <p><strong>Género:</strong> {book.genre}</p>
            </div>
            <button onClick={() => handleEdit(book._id)} className="edit-icon">✎</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeApp;
