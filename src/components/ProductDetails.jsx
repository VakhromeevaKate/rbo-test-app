import React from 'react';
import CommonProducts from './CommonProducts';

const ProductDetails = (props) => {
    let product;
    if (props.productId !== null) {
        product = props.products[props.productRowId];
    }
    return (
        <div onClick={() => props.showDetails(false)}>
            <h1>Car details</h1>
            <table className="Cars">
                <thead className="Cars-header">
                    <tr>
                        <th colSpan={2}>
                            {product.Mark.concat(' ', product.Model)}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>{product.Type}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{product.Year}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{product.Country}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{product.Color}</td>
                    </tr>
                    <tr>
                        <td>Options</td>
                        <td>{product.Options}</td>
                    </tr>
                </tbody>
            </table>
            <CommonProducts
                products={props.products}
                productId={props.productId}
                productRowId={props.productRowId} />
        </div>
    );
}

export default ProductDetails;