import React, { useState, useEffect } from 'react';
import styles from '../css/todoitem.css';


const ToDoItem = ({title, description, id, handleDelete, updateToDo}) => {
  const [editOpen, setEditOpen] = useState(false);
  const [titleState, setTitle] = useState('');
  const [descriptionState, setDescription] = useState('');

  useEffect(() => {
    setTitle(title); setDescription(description);
  }, []);

  const cancelEdit = () => {
    setEditOpen(false);
    setTitle(title);
    setDescription(description);
  }

  const update = () => {
    updateToDo(id, { title: titleState, description: descriptionState });
    setEditOpen(false);
  }

  return (
    <div className={styles.outerdiv}>
      <div>
        <p>Title:</p>
        {
          editOpen ? <input onChange={e => setTitle(e.target.value)} type='text' value={titleState}/> : <p>{titleState}</p>
        }
      </div>
      <div>
        <p>Description:</p>
        {
          editOpen ? <input onChange={e => setDescription(e.target.value)} type='text' value={descriptionState}/> : <p>{descriptionState}</p>
        }
      </div>
      {
        editOpen ? <button onClick={e => cancelEdit()}>Cancel Edit</button> : <button onClick={e => handleDelete(id) }>Delete</button>
      }
      {
        editOpen ? <button onClick={update}>Save</button> : <button onClick={e => setEditOpen(true) }>Edit</button>
      }
    </div>
  )
}



export default ToDoItem;