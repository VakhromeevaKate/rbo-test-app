import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

const header = ['Mark','Model','Type','Year'];

const PRODUCTS = [
  {Id: '1', Mark: 'Ford', Model: "Focus III", Type: "Hatchback", Year: 2014, Color: "Black", Options: "Cruise, LED", Country: "USA"},
  {Id: '2', Mark: 'Ford', Model: "Mondeo", Type: "Sedan", Year: 2009, Color: "Black", Options: "Cruise, LED", Country: "USA"},
  {Id: '3', Mark: 'Ford', Model: "Focus III", Type: "Sedan", Year: 2012, Color: "Red", Options: "Cruise, LED", Country: "USA"},
  {Id: '4', Mark: 'Ford', Model: "F150", Type: "Truck", Year: 2017, Color: "White", Options: "Cruise, Climat, 4x4", Country: "USA"},
  {Id: '5', Mark: 'Jeep', Model: "Cherokee", Type: "SUV", Year: 2015, Color: "Black", Options: "Cruise, LED", Country: "USA"},
  {Id: '6', Mark: 'Jeep', Model: "Compass", Type: "SUV", Year: 2014, Color: "White", Options: "Cruise, LED", Country: "USA"},
  {Id: '7', Mark: 'Jeep', Model: "Grand Cherokee", Type: "SUV", Year: 2018, Color: "Black", Options: "Cruise, LED, 4x4", Country: "USA"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <h3>Searching for a car?</h3>
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
