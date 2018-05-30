import React from 'react';

const increment = ({ dispatch }) => dispatch({ type: 'INCREMENT' });

const decrement = ({ dispatch }) => dispatch({ type: 'DECREMENT' });

export const Counter = ({ store }) => (
    <div>
        <p>{store.getState().Counter}</p>
        <button onClick={() => increment(store)}>Increment</button>
        <button onClick={() => decrement(store)}>Decrement</button>
    </div>
);