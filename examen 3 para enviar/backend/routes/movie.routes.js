import express from 'express';
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';


const router = express.Router();

router.post('/', authMiddleware, createMovie); // Crear película (protegido)
router.get('/', getMovies); // Obtener todas las películas
router.get('/:id', getMovieById); // Obtener una película por ID
router.put('/:id', authMiddleware, updateMovie); // Actualizar película (protegido)
router.delete('/:id', authMiddleware, deleteMovie); // Eliminar película (protegido)

export default router;
