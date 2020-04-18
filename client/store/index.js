import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { toDoReducer } from './reducers.js';

const rootReducer = combineReducers({
  todos: toDoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));