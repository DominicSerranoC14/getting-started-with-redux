import React, { Component } from 'react';
import { Counter } from './components/Counter.jsx';
import './App.css';

class App extends Component {
    render(props) {
        return (
            <div className="App">
                <Counter store={this.props.store} />
            </div>
        );
    }
}

export default App;
