export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GETALL_TODO = 'GETALL_TODO';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const login = userObj => dispatch => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
    .then(response => response.json())
    .then(result => {
      //IF EMAIL IN USE
        dispatch({ type: AUTH_USER, payload: result });
        localStorage.setItem('token', result.token);
        resolve();
    })
    .catch(e => {
      console.log(e, 'login action .catch')
      dispatch({ type: AUTH_ERROR, payload: e.error });
      reject(e.error);
    })
  })
}

export const signUp = userObj => dispatch => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
    .then(response => response.json())
    .then(result => {
      //IF EMAIL IN USE
      if (result.error) {
        dispatch({ type: AUTH_ERROR, payload: result.error });
        reject('Email is in use');
      } else {
        dispatch({ type: AUTH_USER, payload: result });
        localStorage.setItem('token', result.token);
        resolve();
      }
    })
    .catch(e => {
      dispatch({ type: AUTH_ERROR, payload: 'Something went wrong' });
      reject();
    })
  })
}

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: { token: '' }
  };
}

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
      resolve();
    })
    .catch(e => {
      dispatch({ type: ERROR, payload: "Something Went Wrong" });
      reject();
    })
  })
};

export const getAllToDos = () => (dispatch, getState) => (
  fetch('http://localhost:3000/todos')
    .then((response) => response.json())
    .then(results => {
      dispatch( { type: GETALL_TODO, payload: results } );
      dispatch({ type: SUCCESS });
    })
    .catch(e => dispatch({ type: ERROR, payload: "Something Went Wrong" }))
);

export const deleteToDo = id => (dispatch, getState) => {
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
  })
  .catch(e => {
    console.log(e)
    dispatch({ type: ERROR, payload: "Something Went Wrong" });
  })
};

export const updateToDo = (id, updates) => (dispatch, getState) => {
  return fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  })
  .then(response => response.json())
  .then(result => {
    dispatch({ type: UPDATE_TODO, payload: result });
    dispatch({ type: SUCCESS });
  })
  .catch(e => {
    console.log(e)
    dispatch({ type: ERROR, payload: "Something Went Wrong" });
  })
};