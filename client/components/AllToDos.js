import React from 'react';
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem.js';
import { deleteToDo, DELETE_TODO } from '../store/actions.js';

const AllToDos = ({ todos, deleteToDo }) => (
  todos.map((todo, i) => <ToDoItem key={i} id={todo._id} title={todo.title} description={todo.description} handleDelete={deleteToDo} />)
)


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteToDo: id => dispatch(deleteToDo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllToDos);