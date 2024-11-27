// routes/user.routes.js
import express from 'express';
import { registerUser, getAllUsers, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser); // Ruta para registrar un usuario
router.post('/login', loginUser); // Ruta para iniciar sesión
router.get('/', getAllUsers); // Ruta para obtener todos los usuarios

export default router;