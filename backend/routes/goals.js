var express = require('express');
var router = express.Router();
var authMiddleware = require('../middleware/auth');

let goals = []; // Arreglo en memoria para almacenar las metas

// Obtener todas las metas (GET)
router.get('/', authMiddleware, (req, res) => {
  console.log('GET /goals llamado'); // Log para depuración
  res.json(goals);
});

// Agregar una nueva meta (POST)
router.post('/', authMiddleware, (req, res) => {
  console.log('POST /goals llamado con body:', req.body); // Log para depuración
  const { title, dueDate } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }

  // Crear una nueva meta
  const newGoal = { id: Date.now(), title, dueDate };
  goals.push(newGoal);
  res.status(201).json(newGoal);
});

// Eliminar una meta por ID (DELETE)
router.delete('/:id', authMiddleware, (req, res) => {
  console.log('DELETE /goals llamado con id:', req.params.id); // Log para depuración
  const { id } = req.params;

  // Validar que el ID sea un número válido
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  // Filtrar el arreglo para eliminar la meta con el ID especificado
  const initialLength = goals.length;
  goals = goals.filter(goal => goal.id !== parseInt(id));

  // Verificar si se eliminó alguna meta
  if (goals.length === initialLength) {
    return res.status(404).json({ error: 'Goal not found' });
  }

  res.status(200).json({ message: 'Goal deleted' });
});

module.exports = router;