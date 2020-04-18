import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GETALL_TODO } from './actions.js';

export const toDoReducer = (state = [{ title: 'phil', description: 'rousu' }], action) => {
  switch (action.type) {
    case GETALL_TODO:
      return [...state, ...action.payload]
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.todos.filter(obj => obj.title !== action.payload);
    case UPDATE_TODO:
        return state.todos.map(obj => obj.title === payload.title ? payload : obj)
    default:
      return state
  }
}