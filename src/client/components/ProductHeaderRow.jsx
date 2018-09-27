// @flow

import React from 'react';
import * as Type from '../flowtypes/ProductHeaderRowTypes';

const ProductHeaderRow = (props: Type.Props) => {
    return (
        <tr>
            <th>{props.mark}</th>
            <th>{props.model}</th>
            <th>{props.type}</th>
            <th>{props.year}</th>
        </tr>
    );
};
export default ProductHeaderRow;
