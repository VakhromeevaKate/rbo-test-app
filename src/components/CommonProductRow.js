import React, { PureComponent } from 'react';

class CommonProductRow extends PureComponent { 
  render() {
    const { product } = this.props;
      return (
        <tr>
          <td>{product.Mark}</td>
          <td>{product.Model}</td>
          <td>{product.Type}</td>
          <td>{product.Country}</td>
          <td>{product.Color}</td>
          <td>{product.Options}</td>
          <td>{product.Year}</td>
        </tr>
      );
    }
  }
  
export default CommonProductRow;