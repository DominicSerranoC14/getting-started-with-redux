import { combineReducers } from 'redux';
import { Counter } from './counter.js';
import { Todos } from './todo.js';

export default combineReducers({
    Counter,
    Todos
});