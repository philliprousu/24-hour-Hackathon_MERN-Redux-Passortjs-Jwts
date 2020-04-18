import React from 'react';

const ToDoItem = ({title, description}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default ToDoItem;