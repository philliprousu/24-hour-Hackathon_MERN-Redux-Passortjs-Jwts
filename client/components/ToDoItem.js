import React, { useState } from 'react';
import { connect } from 'react-redux'
import styles from '../css/todoitem.css';


const ToDoItem = ({title, description, id, handleDelete}) => {
  const [editOpen, setEditOpen] = useState(false);


  return (
    <div className={styles.outerdiv}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <button onClick={e => handleDelete(id) }>Delete</button>
      <button onClick={e => setEditOpen(true) }>Edit</button>
      {
        editOpen && <p>adsfadsf</p>
      }
    </div>
  )
}



export default ToDoItem;