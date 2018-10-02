function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

import React, { PureComponent } from 'react';
import ProductRow from './ProductRow';
import ProductHeaderRow from './ProductHeaderRow';
import GroupedProductHeaderRow from './GroupedProductHeaderRow';
import ProductDetails from './ProductDetails';
import CommonProducts from './CommonProducts';
import * as Type from '../flowtypes/ProductTableTypes';

class ProductTable extends PureComponent {
  constructor(props) {
    super(props);_defineProperty(this, "handleShowDetails",










































































































    (value, id, row) => {
      this.setState({
        showDetails: value,
        productId: id,
        productRowId: row });

    });this.state = { showDetails: false, productId: '', productRowId: 0 };}render() {let rows = this.filter();if (this.props.sortByMark) {this.sortByMark(rows);}if (this.props.sortByType) {this.sortByType(rows);}if (this.props.sortByYear) {this.sortByYear(rows);}if (this.props.groupByMark) {rows = this.groupByMark(rows);}if (this.props.groupByType) {rows = this.groupByType(rows);}if (this.state.showDetails) {return React.createElement(ProductDetails, { showDetails: this.handleShowDetails, productId: this.state.productId, productRowId: this.state.productRowId, products: this.props.products }, React.createElement(CommonProducts, { productId: this.state.productId, productRowId: this.state.productRowId, products: this.props.products }));}return React.createElement("table", { className: "Cars" }, React.createElement("thead", { className: "Cars-header" }, React.createElement(ProductHeaderRow, { mark: "Mark", model: "Model", type: "Type", year: "Year" })), React.createElement("tbody", { className: "Cars-body" }, rows.map(row => {if (row instanceof Type.AutoHeader) {return React.createElement(GroupedProductHeaderRow, { product: row, key: row.Id });}return React.createElement(ProductRow, { showDetails: this.handleShowDetails, product: row, key: row.Id });})));}filter() {const { filterText, products } = this.props;let rows = [];products.forEach(product => {if (product.Mark.toUpperCase().indexOf(filterText.toUpperCase()) === -1 && product.Model.toUpperCase().indexOf(filterText.toUpperCase()) === -1 && product.Type.toUpperCase().indexOf(filterText.toUpperCase()) === -1 && product.Year.toString().indexOf(filterText) === -1) {return;}rows.push(product);});return rows;}sortByMark(rows) {return rows.sort((a, b) => a.Mark > b.Mark ? 1 : a.Mark === b.Mark ? 0 : -1);}sortByType(rows) {return rows.sort((a, b) => a.Type > b.Type ? 1 : a.Type === b.Type ? 0 : -1);}sortByYear(rows) {return rows.sort((a, b) => a.Year - b.Year);}groupByMark(rows) {this.sortByMark(rows);return rows.reduce((result, row, index) => {if (index === 0 || row.Mark !== rows[index - 1].Mark) {let header = { Id: rows.length + index + 1, Mark: row.Mark, Type: null, className: "GroupHeader" };result.push(header);}result.push(row);return result;}, []);}groupByType(rows) {this.sortByType(rows);return rows.reduce((result, row, index) => {if (index === 0 || row.Type !== rows[index - 1].Type) {let header = { Id: (rows.length + index + 1).toString(), Mark: null, Type: row.Type, className: "GroupHeader" };result.push(header);}result.push(row);return result;}, []);}}

export default ProductTable;