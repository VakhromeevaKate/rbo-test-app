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
        <table className="Cars">
          <thead className="Cars-header">
            <tr>
              <td>{header[0]}</td>
              <td>{header[1]}</td>
              <td>{header[2]}</td>
              <td>{header[3]}</td>
            </tr>
          </thead>
          <tbody className="Cars-body">
            <tr>
              <td>{data[0][0]}</td>
              <td>{data[0][1]}</td>
              <td>{data[0][2]}</td>
              <td>{data[0][3]}</td>
            </tr>
            <tr>
              <td>{data[1][0]}</td>
              <td>{data[1][1]}</td>
              <td>{data[1][2]}</td>
              <td>{data[1][3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
