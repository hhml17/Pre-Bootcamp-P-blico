// routes/task.routes.js
import express from 'express';
import { getAllTasks, createTask, updateTask, getTaskById, deleteTask } from '../controllers/task.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllTasks);
router.post('/', authMiddleware, createTask);
router.put('/:id', authMiddleware, updateTask);
router.get('/:id', authMiddleware, getTaskById);
router.delete('/:id', authMiddleware, deleteTask);

export default router;