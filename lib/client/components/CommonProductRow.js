

import React from 'react';
import * as Type from '../flowtypes/CommonProductRowTypes';

const CommonProductRow = props => {
  const { product } = props;
  return (
    React.createElement("tr", null,
    React.createElement("td", null, product.Mark),
    React.createElement("td", null, product.Model),
    React.createElement("td", null, product.Type),
    React.createElement("td", null, product.Country),
    React.createElement("td", null, product.Color),
    React.createElement("td", null, product.Options),
    React.createElement("td", null, product.Year)));


};
export default CommonProductRow;