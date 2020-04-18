const express = require('express');
const cors = require('cors');
const db = require('./database')
const { addToDo, getAllToDos, editToDo, getOneToDo, deleteToDo } = require('./database/controllers');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.get('/todos', (req, res) => {
  getAllToDos()
    .then(results => res.json(results))
    .catch(e => res.sendStatus(500))
});

app.get('/todos/:id', (req, res) => {
  getOneToDo(req.params.id)
    .then(results => res.json(results))
    .catch(e => res.sendStatus(500))
});

app.put('/todos/:id', (req, res) => {
  editToDo(req.params.id, req.body)
    .then(results => res.json(results))
    .catch(e => res.sendStatus(500));
});

app.post('/todos', (req, res) => {
  addToDo(req.body)
    .then(results => res.json(results))
    .catch(e => res.sendStatus(500));
});

app.delete('/todos/:id', (req, res) => {
  deleteToDo(req.params.id)
    .then(results => res.json(results))
    .catch(e => res.sendStatus(500));
});

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000;
};
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});