import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import NotFound from './components/NotFound.jsx';
import './App.css';

const App = ({ store }) => (
    <Router>
        <div className="App">
            <ul className="nav-bar">
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>

            <Switch>
                <Route
                    path="/counter"
                    render={() => <Counter store={store} />}
                />

                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default App;
