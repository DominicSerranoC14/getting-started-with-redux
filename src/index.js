import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/index.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App store={Store.getState()} />,
    document.getElementById('root')
);

registerServiceWorker();
