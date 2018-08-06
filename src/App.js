import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const header = ['Mark','Model','Type','Year'];

const data = [
  ["Ford", "Focus III", "Hatchback", 2014],
  ["Ford", "Mondeo", "Sedan", 2009],
  ["Mazda", "X6", "Crossover", 2011]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <h2> Здесь будет моя таблица </h2>
        <div></div>
      </div>
    );
  }
}

export default App;
