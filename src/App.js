import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  ['Mark', 'Ford'],
  ['Model', 'Focus'],
  ['Type', 'Hatchback'],
  ['Year', 2014],
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> Здесь будет моя таблица </h2>
        <table className="Cars">
          <thead className="Cars-header">
            <tr>
              <td>{data[0][0]}</td>
              <td>{data[1][0]}</td>
              <td>{data[2][0]}</td>
              <td>{data[3][0]}</td>
            </tr>
          </thead>
          <tbody className="Cars-body">
          { 
            <tr>
              <td>{data[0][1]}</td>
              <td>{data[1][1]}</td>
              <td>{data[2][1]}</td>
              <td>{data[3][1]}</td>
            </tr>
          }
          
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
