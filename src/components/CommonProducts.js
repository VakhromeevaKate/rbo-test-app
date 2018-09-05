import React from 'react';
import CommonProductRow from './CommonProductRow';

class CommonProducts extends React.PureComponent { 
    renderCommon() {
        let product;
        let common = [];
        if (this.props.productId !== null && this.props.productRowId){ 
            product = this.props.products[this.props.productRowId];
            this.props.products.forEach((entity) => {
                if ( entity.Id !== this.props.productId &&
                    ((entity.Color.toUpperCase() === product.Color.toUpperCase() &&
                    entity.Type.toUpperCase() === product.Type.toUpperCase()) ||
                    (entity.Options.toUpperCase() === product.Options.toUpperCase() &&
                    entity.Type.toUpperCase() === product.Type.toUpperCase()) || 
                    (entity.Type.toUpperCase() === product.Type.toUpperCase() && 
                    entity.Options.toUpperCase() === product.Options.toUpperCase() ))
                ) {
                    common.push(<CommonProductRow showDetails={this.handleShowDetails} product={entity} key={entity.Id} />);
                }
            });
        }
        if (common.length > 0){
            return (
                <tbody className="Cars-body">{common}</tbody>
            )
        } return null;
    }
    render() {
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
                {this.renderCommon()}
            </table>
        </div>
        );
      }
    }
    
  export default CommonProducts;