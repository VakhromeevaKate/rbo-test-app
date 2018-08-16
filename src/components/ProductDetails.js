import React from 'react';
import CommonProducts from './CommonProducts';

class ProductDetails extends React.Component {
    render () {
        let product;
        let common = [];
        let index = 0;
        if (this.props.productId !== null){
            product = this.props.products[index];
            
            this.props.products.forEach((entity) => {
                if ((entity.Id !== this.props.productId) && (
                    (entity.Color.toUpperCase()  === product.Color.toUpperCase() &&
                    entity.Type.toUpperCase() === product.Type.toUpperCase()) ||
                    (entity.Options.toUpperCase().indexOf(product.Options.toUpperCase()) !== -1 &&
                    entity.Type.toUpperCase() === product.Type.toUpperCase()) || 
                    (entity.Type.toUpperCase() === product.Type.toUpperCase() && 
                    entity.Options.toUpperCase().indexOf(product.Options.toUpperCase() !== -1)))) {
                    common.push(<CommonProducts showDetails={this.handleShowDetails} product={entity} key={entity.Id} />);
                }
            });
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
                            <td>{product.Country}</td>
                        </tr>
                        <tr>
                            <td>Options</td>
                            <td>{product.Options}</td>
                        </tr>
                    </tbody>
                </table>
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
                        <tbody className="Cars-body">{common}</tbody>
                    </table>
                </div>
            </div>
        );
    }
    getProductDetails(productId){

    }
}

export default ProductDetails;