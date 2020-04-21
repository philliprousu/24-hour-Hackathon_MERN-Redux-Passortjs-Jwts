import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GETALL_TODO, ERROR, AUTH_USER, AUTH_ERROR, SUCCESS, RESET_TODO } from './actions.js';

const INITIAL_STATE = { auth: '', error: false };

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
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
      return action.payload;
    case RESET_TODO:
      return [];
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