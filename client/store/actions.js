export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GETALL_TODO = 'GETALL_TODO';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const addToDo = todo => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
    .then(response => response.json())
    .then(result => {
      dispatch({ type: ADD_TODO, payload: result });
      dispatch({ type: SUCCESS });
      resolve(); })
    .catch(e => {
      dispatch({ type: ERROR, payload: "Something Went Wrong" });
      reject();
    })
  })
}

export const getAllToDos = () => (dispatch, getState) => {
  return fetch('http://localhost:3000/todos')
          .then((response) => response.json())
          .then(results => {
            dispatch( { type: GETALL_TODO, payload: results } );
            dispatch({ type: SUCCESS });
          })
          .catch(e => dispatch({ type: ERROR, payload: "Something Went Wrong" }))
}

export const deleteToDo = id => (dispatch, getState) => {
  console.log(id)
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(result => {
      dispatch({ type: DELETE_TODO, payload: id });
      dispatch({ type: SUCCESS });
      resolve(); })
    .catch(e => {
      console.log(e)
      dispatch({ type: ERROR, payload: "Something Went Wrong" });
      reject();
    })
  })
}