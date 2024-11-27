// controllers/task.controller.js
import Task from '../models/task.model.js';

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
  const { description, dueDate } = req.body;
  try {
    const newTask = new Task({ description, dueDate, owner: req.userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear tarea' });
  }
};

// Actualizar una tarea
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description, dueDate, status } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, owner: req.userId },
      { description, dueDate, status },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tarea' });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, owner: req.userId });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tarea' });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la tarea' });
  }
};