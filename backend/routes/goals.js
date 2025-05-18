var express = require('express');
var router = express.Router();
const checkApiKey = require('../middleware/checkApiKey');

let goals = []; // Arreglo en memoria para almacenar las metas

// Proteger todas las rutas con el middleware
router.use(checkApiKey);

// Obtener todas las metas (GET)
router.get('/', (req, res) => {
  res.status(200).json(goals);
});

// Agregar una nueva meta (POST)
router.post('/', (req, res) => {
  const { title, dueDate } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }

  // Crear una nueva meta
  const newGoal = { id: Date.now(), title, dueDate };
  goals.push(newGoal);
  res.status(200).json(newGoal); // Status 200 para respuesta satisfactoria
});

// Eliminar una meta por ID (DELETE)
router.delete('/:id', (req, res) => {
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
    return res.status(400).json({ error: 'Goal not found or invalid id' });
  }

  res.status(200).json({ message: 'Goal deleted' });
});

module.exports = router;