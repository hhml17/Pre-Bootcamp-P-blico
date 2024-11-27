// routes/user.routes.js
import express from 'express';
import { getAllUsers, createUser } from '../controller/user.controller.js'; // Asegúrate de incluir .js

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

export default router;
