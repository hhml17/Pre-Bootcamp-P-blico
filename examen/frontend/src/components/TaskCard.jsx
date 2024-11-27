import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      <p>{task.description}</p>
      <p>Fecha límite: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => onEdit(task._id)}>Editar</button>
      <button onClick={() => onDelete(task._id)}>Eliminar</button>
    </div>
  );
};

export default TaskCard;
