import React from 'react';
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem.js';
//import { DELETE_TODO } from '../store/actions.js';

const AllToDos = ({ todos }) => (
  todos.map((todo, i) => <ToDoItem key={i} title={todo.title} description={todo.description} />)
)


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  }
}

// const mapDispatchToProps = { DELETE_TODO };
// const mapDispatchToProps = dispatch => {
//   return {
//     addToDo: toDo => dispatch({ type: ADD_TODO, payload: toDo})
//   }
// }

export default connect(mapStateToProps)(AllToDos);