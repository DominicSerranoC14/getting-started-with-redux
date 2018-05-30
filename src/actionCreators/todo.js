export const addTodo = ({ dispatch, getState }, todo) =>
    dispatch({
        type: 'ADD_TODO',
        id: getState().Todos.length + 1,
        text: todo.text
    });

export const toggleTodo = ({ dispatch }, { id }) =>
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
