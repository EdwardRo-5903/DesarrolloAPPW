var express = require('express');
var router = express.Router();
const checkApiKey = require('../middleware/checkApiKey'); // Asegúrate de que el nombre coincida con tu archivo
let tasks = []; // Arreglo en memoria para almacenar tareas

// Proteger todas las rutas con el middleware
router.use(checkApiKey);

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

// Agregar una nueva tarea
router.post('/', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }
  const newTask = { id: Date.now(), title, dueDate };
  tasks.push(newTask);
  res.status(200).json(newTask); // Status 200 para respuesta satisfactoria
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  if (tasks.length === initialLength) {
    return res.status(400).json({ error: 'Task not found or invalid id' });
  }
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = router;