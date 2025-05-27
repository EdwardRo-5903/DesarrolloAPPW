const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Goal', GoalSchema);