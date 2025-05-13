var express = require('express');
var router = express.Router();

let tasks = []; // Arreglo en memoria para almacenar tareas

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Agregar una nueva tarea
router.post('/', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }
  const newTask = { id: Date.now(), title, dueDate };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = router;