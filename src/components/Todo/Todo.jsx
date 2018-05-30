import React from 'react';
import { toggleTodo } from './../../actionCreators/todo.js';

const Todo = ({ store, todo }) => (
    <li
        className={todo.completed ? 'complete-todo' : 'incomplete-todo'}
        onClick={() => toggleTodo(store, todo)}
    >
        {todo.text} | {todo.completed ? 'Completed' : 'Incomplete'}
    </li>
);

export default Todo;