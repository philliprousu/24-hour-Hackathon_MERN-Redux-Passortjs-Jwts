import React from 'react';
import { connect } from 'react-redux'
import Auth from './Auth.js';
import ToDoItem from './ToDoItem.js';
import { deleteToDo, updateToDo } from '../store/actions.js';

const AllToDos = ({ todos, deleteToDo, updateToDo }) => {
  return (
    todos.map((todo, i) => <ToDoItem key={i} id={todo._id} title={todo.title} description={todo.description} handleDelete={deleteToDo} updateToDo={updateToDo}/>)
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToDo: (id, updates) => dispatch(updateToDo(id, updates)),
    deleteToDo: id => dispatch(deleteToDo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth(AllToDos));