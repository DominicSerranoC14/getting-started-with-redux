import { createStore } from 'redux';
import RootReducer from '../reducers/index.js';

const Store = createStore(
    RootReducer
);

export default Store;

