const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  title: String,
  description: String
});

const ToDoModel = mongoose.model('ToDo', toDoSchema);

module.exports.ToDoModel = ToDoModel;