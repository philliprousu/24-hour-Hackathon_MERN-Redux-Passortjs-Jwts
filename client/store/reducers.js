import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GETALL_TODO, ERROR, SUCCESS } from './actions.js';

export const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case GETALL_TODO:
      return [...state, ...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(obj => obj._id !== action.payload);
    case UPDATE_TODO:
        return state.map(obj => obj._id === payload._id ? payload : obj)
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