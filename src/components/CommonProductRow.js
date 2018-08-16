import React from 'react';

class CommonProductRow extends React.Component { 
  render() {
      return (
        <tr>
          <td>{this.props.product.Mark}</td>
          <td>{this.props.product.Model}</td>
          <td>{this.props.product.Type}</td>
          <td>{this.props.product.Country}</td>
          <td>{this.props.product.Color}</td>
          <td>{this.props.product.Options}</td>
          <td>{this.props.product.Year}</td>
        </tr>
      );
    }
  }
  
export default CommonProductRow;