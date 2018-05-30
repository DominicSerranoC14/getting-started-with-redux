import React from 'react';

const increment = ({ dispatch }) => dispatch({ type: 'INCREMENT' });

const decrement = ({ dispatch }) => dispatch({ type: 'DECREMENT' });

const Counter = ({ store }) => (
    <div>
        <p>{store.getState().Counter}</p>
        <button onClick={() => increment(store)}>Increment</button>
        <button onClick={() => decrement(store)}>Decrement</button>
    </div>
);

export default Counter;