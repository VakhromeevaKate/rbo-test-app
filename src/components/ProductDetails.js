import React from 'react';

class ProductDetails extends React.Component {
    render () {
        let product;
        if (this.props.productId !== null){
            product = this.props.products[this.props.productId-1];
            console.log(product);
        }
        return (
            <div onClick={() => this.props.showDetails(false)}>
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
                            <td></td>
                        </tr>
                        <tr>
                            <td>Options</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    getProductDetails(productId){

    }
}

export default ProductDetails;