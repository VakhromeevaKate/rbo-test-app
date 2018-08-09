import React from 'react';

class ProductDetails extends React.Component {
    render () {
        return (
            <div onClick={() => this.props.showDetails(false)}>
                <h1>Product Details</h1>
            </div>
        );
    }
}

export default ProductDetails;