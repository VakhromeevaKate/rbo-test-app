

import React from 'react';
import * as Type from '../flowtypes/GroupedProductHeaderRowTypes';

const GroupedProductHeaderRow = props => {
  return (
    React.createElement("tr", null,
    React.createElement("th", { className: "GroupHeader", colSpan: 4 },
    props.product.Type === null ? props.product.Mark : props.product.Type)));



};

export default GroupedProductHeaderRow;