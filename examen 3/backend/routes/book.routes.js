import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/book.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, createBook); // Crear libro (protegido)
router.get('/', getBooks); // Obtener todos los libros
router.get('/:id', getBookById); // Obtener un libro por ID
router.put('/:id', authMiddleware, updateBook); // Actualizar libro (protegido)
router.delete('/:id', authMiddleware, deleteBook); // Eliminar libro (protegido)

export default router;
