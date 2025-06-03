var express = require('express');
var router = express.Router();
const checkApiKey = require('../middleware/checkApiKey');
const Goal = require('../models/Goal');

router.use(checkApiKey);

router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener metas' });
  }
});

router.post('/', async (req, res) => {
  const { title, description, dueDate } = req.body;
  if (!title || !description || !dueDate) {
    return res.status(400).json({ error: 'Title, description and dueDate are required' });
  }
  try {
    const newGoal = new Goal({ title, description, dueDate });
    await newGoal.save();
    res.status(200).json(newGoal);
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar la meta' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Goal.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Goal not found' });
    }
    res.status(200).json({ message: 'Goal deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la meta' });
  }
});

router.put('/:id', async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate },
      { new: true }
    );
    if (!updatedGoal) {
      return res.status(404).json({ error: 'Goal not found' });
    }
    res.status(200).json(updatedGoal);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la meta' });
  }
});

module.exports = router;