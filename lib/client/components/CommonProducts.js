

import React from 'react';
import CommonProductRow from './CommonProductRow';
import * as Type from '../flowtypes/CommonProductsTypes';

const CommonProducts = props => {
  return (
    React.createElement("div", null,
    React.createElement("h2", null, "You may also like: "),
    React.createElement("table", { className: "Cars" },
    React.createElement("thead", { className: "Cars-header" },
    React.createElement("tr", null,
    React.createElement("th", null, "Mark"),
    React.createElement("th", null, "Model"),
    React.createElement("th", null, "Type"),
    React.createElement("th", null, "Country"),
    React.createElement("th", null, "Color"),
    React.createElement("th", null, "Options"),
    React.createElement("th", null, "Year"))),


    renderCommon(props))));



};

function renderCommon(props) {
  let product;
  let common = [];
  if (props.productId !== null && props.productRowId) {
    product = props.products[props.productRowId];
    props.products.forEach(entity => {
      if (entity.Id !== props.productId && (
      entity.Color.toUpperCase() === product.Color.toUpperCase() &&
      entity.Type.toUpperCase() === product.Type.toUpperCase() ||
      entity.Options.toUpperCase() === product.Options.toUpperCase() &&
      entity.Type.toUpperCase() === product.Type.toUpperCase() ||
      entity.Type.toUpperCase() === product.Type.toUpperCase() &&
      entity.Options.toUpperCase() === product.Options.toUpperCase()))
      {
        common.push(entity);
      }
    });
  }
  if (common.length > 0) {
    return (
      React.createElement("tbody", { className: "Cars-body" }, common.map(entity => {
        return (
          React.createElement(CommonProductRow, {
            showDetails: true,
            product: entity,
            key: entity.Id }));


      })));

  }

  return null;
}
export default CommonProducts;