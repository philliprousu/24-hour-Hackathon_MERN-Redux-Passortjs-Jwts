import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GETALL_TODO, ERROR, SUCCESS, SIGN_UP, LOGIN, AUTH_ERROR } from './actions.js';

const INITIAL_STATE = { auth: '', error: false };

export const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SIGN_UP:
      return {...state, auth: action.payload.token, error: null}
    case LOGIN:
      return {...state, auth: action.payload.token, error: null}
    case AUTH_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}

export const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case GETALL_TODO:
      return [...state, ...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(obj => obj._id !== action.payload);
    case UPDATE_TODO:
        return state.map(obj => obj._id === action.payload._id ? action.payload : obj)
    default:
      return state
  }
}

export const errorReducer = (state = { error: null }, action) => {
  switch (action.type) {
    case ERROR:
      return {...state, error: action.payload }
    case SUCCESS:
      return {...state, error: null }
    default:
      return state
  }
}