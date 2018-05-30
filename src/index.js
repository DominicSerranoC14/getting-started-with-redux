import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/index.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
    ReactDOM.render(
        <App store={Store} />,
        document.getElementById('root')
    );
};

Store.subscribe(render);
render();

registerServiceWorker();
