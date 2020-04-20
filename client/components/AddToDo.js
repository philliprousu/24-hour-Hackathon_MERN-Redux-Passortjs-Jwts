import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToDo } from '../store/actions.js';

const AddToDo = ({ addToDo }) => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addToDo({ title: title, description: description})
      .then(() => history.push('/'))
      .catch(() => history.push('/'))
  }

  return (
    <div>
      <p>Add a ToDo</p>
      <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Title here" />
      <textarea onChange={e => setDescription(e.target.value)} placeholder="Description here" />
      <button onClick={e => handleSubmit(e)}>Submit</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: toDo => dispatch(addToDo(toDo))
  }
}

export default connect(null, mapDispatchToProps)(AddToDo);