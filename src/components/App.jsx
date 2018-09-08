import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';
//import FilterableProductTable from './FilterableProductTable';
/*import Papa from 'papaparse';
import autoDataset from '../data-input/data-auto.csv';
import attributesDataset from '../data-input/data-attributes.csv';
import colorsDataset from '../data-input/data-colors.csv';
import countriesDataset from '../data-input/data-countries.csv';
import optionsDataset from '../data-input/data-options.csv';*/
//import PrepareData from '../utils/PrepareData';

class App extends PureComponent {
  /*constructor(props){
    super(props);
    this.state = {
      ready: false,
      autos: [],
      attributes: [],
      colors: [],
      countries: [],
      options: []
    }
  };*/

  componentDidMount(){
    /*const config = {
      delimiter: ',',
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      trimHeaders: false
    }  
    let _this = this;
    let counter = 0;
   
    fetch(autoDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      _this.setState({autos: Papa.parse(data, config).data}); 
      counter ++;
      if (counter === 5) _this.setState({ready: true}); 
    });

    fetch(attributesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data) {
        _this.setState({attributes: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
    });

    fetch(colorsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data) {
        _this.setState({colors: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
    });

    fetch(countriesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data) {
        _this.setState({countries: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
    });

    fetch(optionsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data) {
        _this.setState({options: Papa.parse(data, config).data});
        counter ++;
        if (counter === 5) _this.setState({ready: true});
    });*/
  }

  /*render() {
    console.log(this.props);
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
  }*/
  render() {
    console.log(this.props.testState.data.ready);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <h3>Searching for a car?</h3>
        <div>ready={this.props.testState.data.ready}</div>
      </div>
    )
  }
}


export default connect(
  state => ({
    testState: state
  }),
  dispatch => ({

  })  

)(App);
