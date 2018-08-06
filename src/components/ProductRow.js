import React from 'react';

class ProductRow extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.product.Mark}</td>
          <td>{this.props.product.Model}</td>
          <td>{this.props.product.Type}</td>
          <td>{this.props.product.Year}</td>
        </tr>
      );
    }
  }
export default ProductRow;