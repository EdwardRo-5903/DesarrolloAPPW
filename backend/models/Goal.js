const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }, // Agregado
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Goal', GoalSchema);