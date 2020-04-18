export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GETALL_TODO = 'GETALL_TODO';

// export const addToDo = todo => ({ type: ADD_TODO, payload: todo});

export const addToDo = todo => (dispatch, getState) => {
  fetch('http://localhost:3000/todos')
    .then((response) => {
      console.log(reponse)
    })
    .catch(e => console.log(e))//dispatch to an error);
}

export const getAllToDos = () => (dispatch, getState) => {
  return fetch('http://localhost:3000/todos')
          .then((response) => response.json())
          .then(results => dispatch( { type: GETALL_TODO, payload: results } ))
          .catch(e => console.log(e)) //dispatch to an error);
}

// function makeASandwichWithSecretSauce(forPerson) {
//   // We can invert control here by returning a function - the "thunk".
//   // When this function is passed to `dispatch`, the thunk middleware will intercept it,
//   // and call it with `dispatch` and `getState` as arguments.
//   // This gives the thunk function the ability to run some logic, and still interact with the store.
//   return function(dispatch) {
//     return fetchSecretSauce().then(
//       (sauce) => dispatch(makeASandwich(forPerson, sauce)),
//       (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
//     );
//   };
// }
