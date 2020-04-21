import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { toDoReducer, errorReducer, authReducer } from './reducers.js';

const rootReducer = combineReducers({
  todos: toDoReducer,
  error: errorReducer,
  auth: authReducer
})

export const store = createStore(rootReducer, { auth: { auth: localStorage.getItem('token') }}, composeWithDevTools(
  applyMiddleware(thunk)
));