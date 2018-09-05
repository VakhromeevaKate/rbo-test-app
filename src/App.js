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
        console.log(data)
        _this.setState({autos: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
      }
    });
    /*fetch(autoDataset)
    .then(function(data) {
        //_this.setState({autos: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
        return data.text()
    })
    .catch();
    */
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
