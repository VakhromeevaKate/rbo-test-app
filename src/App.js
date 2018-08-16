import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import Papa from 'papaparse';
import autoDataset from './data-input/data-auto.csv';
import attributesDataset from './data-input/data-attributes.csv';
import colorsDataset from './data-input/data-colors.csv';
import countriesDataset from './data-input/data-countries.csv';
import optionsDataset from './data-input/data-options.csv';
import $ from "jquery";
import PrepareData from './utils/PrepareData';

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
  constructor(props){
    super(props);
    this.state = {
      ready: false,
      autos: [],
      attributes: [],
      colors: [],
      countries: [],
      options: []
    };
  }
  componentDidMount() {
    const config = {
      delimiter: ',',
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      trimHeaders: false
    }  
    let _this = this;
    let counter = 0;
    $.ajax({
      url: autoDataset,
      method: "get",
      type: "text",
      success:  function(data) {
        _this.setState({autos: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
    $.ajax({
      url: attributesDataset,
      method: "get",
      type: "text",
      success:  function(data) {
        _this.setState({attributes: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
    $.ajax({
      url: colorsDataset,
      method: "get",
      type: "text",
      success:  function(data) {
        _this.setState({colors: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
    $.ajax({
      url: countriesDataset,
      method: "get",
      type: "text",
      success:  function(data) {
        _this.setState({countries: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
    $.ajax({
      url: optionsDataset,
      method: "get",
      type: "text",
      success:  function(data) {
        _this.setState({options: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
  }

  render() {
    let data = PrepareData(this.state.autos, this.state.attributes, this.state.colors, this.state.countries, this.state.options);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <h3>Searching for a car?</h3>
        <FilterableProductTable 
        products={data} 
        ready={this.state.ready} />
      </div>
    );
  }
}

export default App;
