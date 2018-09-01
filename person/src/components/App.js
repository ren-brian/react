import React, { Component } from 'react';
import '../style/App.css';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>React App Test</h3>
        <Person name="Max" age="25" /> 
        <Person name="Jake" age="32" /> 
      </div>
    );
  }
}

export default App;
