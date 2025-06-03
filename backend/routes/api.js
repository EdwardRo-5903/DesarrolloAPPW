const express = require('express');
const router = express.Router();
const checkApiKey = require('../middleware/checkApiKey');
const Task = require('../models/Task');
const Goal = require('../models/Goal');

router.use(checkApiKey);

// Obtener tareas
router.get('/getTasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// Obtener metas
router.get('/getGoals', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener metas' });
  }
});

// Agregar tarea
router.post('/addTask', async (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }
  try {
    const newTask = new Task({ title, dueDate });
    await newTask.save();
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar tarea' });
  }
});

// Agregar meta
router.post('/addGoal', async (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and dueDate are required' });
  }
  try {
    const newGoal = new Goal({ title, dueDate });
    await newGoal.save();
    res.status(200).json(newGoal);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar meta' });
  }
});

// Eliminar tarea
router.delete('/removeTask/:id', async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(400).json({ error: 'Task not found or invalid id' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

// Eliminar meta
router.delete('/removeGoal/:id', async (req, res) => {
  try {
    const result = await Goal.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(400).json({ error: 'Goal not found or invalid id' });
    }
    res.status(200).json({ message: 'Goal deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar meta' });
  }
});

module.exports = router;