

import React from 'react';
import * as Type from '../flowtypes/ProductDetailsTypes';

const ProductDetails = props => {
  let product;
  if (props.productId !== null) {
    product = props.products[props.productRowId];
  } else {
    product = {
      Id: null,
      Mark: '',
      Model: '',
      Type: null,
      Country: null,
      Color: null,
      Options: null,
      Year: null };

  }

  return (
    React.createElement("div", { onClick: () => props.showDetails(false) },
    React.createElement("h1", null, "Car details"),
    React.createElement("table", { className: "Cars" },
    React.createElement("thead", { className: "Cars-header" },
    React.createElement("tr", null,
    React.createElement("th", { colSpan: 2 },
    product.Mark.concat(' ', product.Model)))),



    React.createElement("tbody", null,
    React.createElement("tr", null,
    React.createElement("td", null, "Type"),
    React.createElement("td", null, product.Type)),

    React.createElement("tr", null,
    React.createElement("td", null, "Year"),
    React.createElement("td", null, product.Year)),

    React.createElement("tr", null,
    React.createElement("td", null, "Country"),
    React.createElement("td", null, product.Country)),

    React.createElement("tr", null,
    React.createElement("td", null, "Color"),
    React.createElement("td", null, product.Color)),

    React.createElement("tr", null,
    React.createElement("td", null, "Options"),
    React.createElement("td", null, product.Options)))),



    props.children));


};

export default ProductDetails;