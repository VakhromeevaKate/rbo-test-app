import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
    var rows = [];
    this.props.products.forEach((product) => {
      if (product.Mark.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Model.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Type.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Year.toString().indexOf(this.props.filterText) === -1 ) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.Id} />);
    });
    if(this.props.sortByMark === true){
      console.log('sortByMark = ' + this.props.sortByMark);
      console.log('sortByMark case in ProductTable')
        rows.sort(function(a, b){
        if(a.props.product.Mark < b.props.product.Mark) return -1;
        if(a.props.product.Mark > b.props.product.Mark) return 1;
        return 0;
      });
      console.log(rows);    
    }
    if(this.props.sortByType === true){
      console.log('sortByType = ' + this.props.sortByType);
      console.log('sortByType case in ProductTable')
        rows.sort(function(a, b){
        if(a.props.product.Type < b.props.product.Type) return -1;
        if(a.props.product.Type > b.props.product.Type) return 1;
        return 0;
      });
      console.log(rows);    
    }
    if(this.props.sortByYear === true){
      console.log('sortByYear = ' + this.props.sortByYear);
      console.log('sortByYear case in ProductTable')
        rows.sort(function(a, b){
        if(a.props.product.Year < b.props.product.Year) return -1;
        if(a.props.product.Year > b.props.product.Year) return 1;
        return 0;
      });
      console.log(rows);    
    }
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