import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  ['Alexander', 345345, 887423],
  ['Paul', 2347, 76323],
  ['Larisa', 745, 54234],
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
              <td>Mark</td>
              <td>Model</td>
              <td>Type</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody className="Cars-body">
          <tr>
              <td>Ford</td>
              <td>F150</td>
              <td>Truck</td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
