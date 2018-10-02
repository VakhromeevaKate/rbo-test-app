

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FilterableProductTable from '../components/FilterableProductTable';
import PrepareData from '../utils/PrepareData';
import * as Type from '../flowtypes/AppTypes';

import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      autos: [],
      attributes: [],
      colors: [],
      countries: [],
      options: [],
      product: [],
      product: null,
      products: null };

  }

  render() {
    const data = this.props.appState.data;
    const products = PrepareData(data.autos, data.attributes, data.colors, data.countries, data.options);

    return (
      React.createElement("div", null,
      React.createElement(FilterableProductTable, {
        products: products,
        ready: data.ready })));


  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps !== nextProps) {
      return nextProps;
    }

    return prevProps;
  }}


export default connect(
state => ({
  appState: state }))(

App);