// @flow

import React from 'react';
import CommonProductRow from './CommonProductRow';
import * as Type from '../flowtypes/CommonProductsTypes';

const CommonProducts = (props: Type.Props) => {
    return (
        <div>
            <h2>You may also like: </h2>
            <table className="Cars">
                <thead className="Cars-header">
                    <tr>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Country</th>
                        <th>Color</th>
                        <th>Options</th>
                        <th>Year</th>
                    </tr>
                </thead>
                {renderCommon(props)}
            </table>
        </div>
    );
};

function renderCommon(props: Type.Props) {
    let product;
    let common = [];
    if (props.productId !== null && props.productRowId) {
        product = props.products[props.productRowId];
        props.products.forEach((entity) => {
            if (entity.Id !== props.productId &&
                ((entity.Color.toUpperCase() === product.Color.toUpperCase() &&
                    entity.Type.toUpperCase() === product.Type.toUpperCase()) ||
                    (entity.Options.toUpperCase() === product.Options.toUpperCase() &&
                        entity.Type.toUpperCase() === product.Type.toUpperCase()) ||
                    (entity.Type.toUpperCase() === product.Type.toUpperCase() &&
                        entity.Options.toUpperCase() === product.Options.toUpperCase()))
            ) {
                common.push(entity);
            }
        });
    }
    if (common.length > 0) {
        return (
            <tbody className="Cars-body">{common.map((entity) => {
                return (
                    <CommonProductRow
                        showDetails={true}
                        product={entity}
                        key={entity.Id}
                    />
                );
            })}</tbody>
        );
    }

    return null;
}
export default CommonProducts;
