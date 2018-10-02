

import React from 'react';
import * as Type from '../flowtypes/ProductRowTypes';

const ProductRow = props => {
  return (
    React.createElement("tr", { onClick: () => props.showDetails(true, props.product.Id, props.product.Row) },
    React.createElement("td", null, props.product.Mark),
    React.createElement("td", null, props.product.Model),
    React.createElement("td", null, props.product.Type),
    React.createElement("td", null, props.product.Year)));


};

export default ProductRow;