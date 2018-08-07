import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
      var rows = [];
      /*this.props.products.forEach(function(product) {
        rows.push(<ProductRow product={product} key={product.name} />);
      });*/
      
    this.props.products.forEach((product) => {
      if (product.Mark.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.Id} />);
    });
      return (
        <table className="Cars">
          <thead className="Cars-header">
            <tr>
              <th>Mark</th>
              <th>Model</th>
              <th>Type</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody className="Cars-body">{rows}</tbody>
        </table>
      );
    }
  }
  export default ProductTable;