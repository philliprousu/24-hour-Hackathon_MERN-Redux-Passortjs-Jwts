const { ToDoModel } = require('../models');

const addToDo = reqBody => {
  return new Promise((resolve, reject) => {
    ToDoModel.create(reqBody)
      .then(results => resolve(results))
      .catch(e => reject(e))
  })
}

const getAllToDos = id => {
  return new Promise((resolve, reject) => {
    ToDoModel.find({ userId: id})
      .then(results => resolve(results))
      .catch(e => reject(e));
  })
}

const editToDo = (id, reqBody) => {
  return new Promise((resolve, reject) => {
    ToDoModel.findByIdAndUpdate(id, reqBody, { new: true })
      .then(results => resolve(results))
      .catch(e => reject(e));
  });
}

const getOneToDo = id => {
  return new Promise((resolve, reject) => {
    ToDoModel.find({ _id: id })
      .then(results => resolve(results))
      .catch(e => reject(e));
  });
}

const deleteToDo = id => {
  return new Promise((resolve, reject) => {
    ToDoModel.findByIdAndDelete(id)
      .then(results => resolve(results))
      .catch(e => reject(e));
  })
};

module.exports.addToDo = addToDo;
module.exports.getAllToDos = getAllToDos;
module.exports.editToDo = editToDo;
module.exports.getOneToDo = getOneToDo;
module.exports.deleteToDo = deleteToDo;