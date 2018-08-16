import React from 'react';

class ProductRow extends React.Component { 
  render() {
      return (
        <tr onClick={() => this.props.showDetails(true, this.props.product.Id, this.props.product.Row)}>
          <td>{this.props.product.Mark}</td>
          <td>{this.props.product.Model}</td>
          <td>{this.props.product.Type}</td>
          <td>{this.props.product.Year}</td>
        </tr>
      );
    }
  }
  
export default ProductRow;