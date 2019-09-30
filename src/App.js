//src/App.js
import React, { Component } from 'react';
import Stopwatch from './components/Stopwatch';
import Employee from './components/Employee';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>Fuel Pump</h1>
        <Stopwatch />
        <Employee />
      </div>
    );
  }
}
export default App;
