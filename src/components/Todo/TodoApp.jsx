import React from 'react';
import Todo from './Todo.jsx';
import { addTodo } from './../../actionCreators/todo.js';

const TodoList = ({ store }) => (
    store.getState().Todos.map(({ id, text, completed }) => (
        <Todo store={store} key={id} todo={{ completed, id, text }} />
    ))
);

const TodoApp = ({ store }) => (
    <div>
        <p>
            Todo App
        </p>

        <button
            onClick={() => addTodo(store, { text: 'New' })}>
            Add Todo
        </button>

        <TodoList store={store} />
    </div >
);

export default TodoApp;