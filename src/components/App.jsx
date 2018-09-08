import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import PrepareData from '../utils/PrepareData';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      ready: false,
      autos: [],
      attributes: [],
      colors: [],
      countries: [],
      options: []
    }
  };

  render() {
    let data = this.props.appState.data;
    let products = PrepareData(data.autos, data.attributes, data.colors, data.countries, data.options);
    //console.log(products);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RBO Test App</h1>
        </header>
        <h3>Searching for a car?</h3>
        <FilterableProductTable 
        products={products} 
        ready={data.ready} />
      </div>
    );
  }

  static getDerivedStateFromProps(nextProps, prevProps){
    if (prevProps !== nextProps) {
      return nextProps;
    }
  }
}


export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({

  })  

)(App);
