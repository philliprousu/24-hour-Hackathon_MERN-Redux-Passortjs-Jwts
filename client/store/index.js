import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { toDoReducer, errorReducer } from './reducers.js';

const rootReducer = combineReducers({
  todos: toDoReducer,
  error: errorReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));