import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './components/FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';

var PRODUCTS = [
    {Mark: 'Ford', Model: "Focus III", Type: "Hatchback", Year: 2014},
    {Mark: 'Ford', Model: "Mondeo", Type: "Sedan", Year: 2009},
    {Mark: 'Ford', Model: "Focus III", Type: "Sedan", Year: 2012},
    {Mark: 'Ford', Model: "F150", Type: "Truck", Year: 2017},
    {Mark: 'Jeep', Model: "Cherokee", Type: "SUV", Year: 2015},
    {Mark: 'Jeep', Model: "Compass", Type: "SUV", Year: 2014},
    {Mark: 'Jeep', Model: "Grand Cherokee", Type: "SUV", Year: 2018},
  ];
   
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
  );

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
