function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

import React, { PureComponent } from 'react';
import SearchBar from '../search/SearchBar';
import ProductTable from './ProductTable';
import * as Type from '../flowtypes/FilterableProductTableTypes';
import './FilterableProductTable.css';

class FilterableProductTable extends PureComponent {
  constructor(props) {
    super(props);_defineProperty(this, "handleUserInput",











































    filterText => {
      this.setState({
        filterText: filterText });

    });_defineProperty(this, "handleGroupByMark",
    () => {
      this.setState({
        groupByMark: true,
        groupByType: false,
        sortByMark: false,
        sortByType: false,
        sortByYear: false,
        showDetails: false });

    });_defineProperty(this, "handleGroupByType",
    () => {
      this.setState({
        groupByMark: false,
        groupByType: true,
        sortByMark: false,
        sortByType: false,
        sortByYear: false,
        showDetails: false });

    });_defineProperty(this, "handleSortByMark",
    () => {
      this.setState({
        groupByMark: false,
        groupByType: false,
        sortByMark: true,
        sortByType: false,
        sortByYear: false,
        showDetails: false });

    });_defineProperty(this, "handleSortByType",
    () => {
      this.setState({
        groupByMark: false,
        groupByType: false,
        sortByMark: false,
        sortByType: true,
        sortByYear: false,
        showDetails: false });

    });_defineProperty(this, "handleSortByYear",
    () => {
      this.setState({
        groupByMark: false,
        groupByType: false,
        sortByMark: false,
        sortByType: false,
        sortByYear: true,
        showDetails: false });

    });this.state = { filterText: '', sortByMark: false, sortByType: false, sortByYear: false, groupByMark: false, groupByType: false, showDetails: false };}render() {if (!this.props.ready) {return React.createElement("div", null, React.createElement("p", null, "Data is loading..."));}return React.createElement("div", { className: "App" }, React.createElement("header", { className: "App-header" }, React.createElement("h1", { className: "App-title" }, "RBO Test App")), React.createElement("h3", null, "Searching for a car?"), React.createElement("div", null, React.createElement(SearchBar, { filterText: this.state.filterText, onSortByMark: this.handleSortByMark, onSortByType: this.handleSortByType, onSortByYear: this.handleSortByYear, onGroupByMark: this.handleGroupByMark, onGroupByType: this.handleGroupByType, onUserInput: this.handleUserInput }), React.createElement(ProductTable, { products: this.props.products, filterText: this.state.filterText, sortByMark: this.state.sortByMark, sortByType: this.state.sortByType, sortByYear: this.state.sortByYear, groupByMark: this.state.groupByMark, groupByType: this.state.groupByType })));}}

export default FilterableProductTable;