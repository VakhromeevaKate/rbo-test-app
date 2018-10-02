

import React from 'react';
import * as Type from '../flowtypes/ProductHeaderRowTypes';

const ProductHeaderRow = props => {
  return (
    React.createElement("tr", null,
    React.createElement("th", null, props.mark),
    React.createElement("th", null, props.model),
    React.createElement("th", null, props.type),
    React.createElement("th", null, props.year)));


};
export default ProductHeaderRow;