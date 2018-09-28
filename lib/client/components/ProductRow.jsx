// 

import React from 'react';
import * as Type from '../flowtypes/ProductRowTypes';

const ProductRow = (props) => {
    return (
        <tr onClick={() => props.showDetails(true, props.product.Id, props.product.Row)}>
            <td>{props.product.Mark}</td>
            <td>{props.product.Model}</td>
            <td>{props.product.Type}</td>
            <td>{props.product.Year}</td>
        </tr>
    );
};

export default ProductRow;
