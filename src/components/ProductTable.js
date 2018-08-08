import React from 'react';
import ProductRow from './ProductRow';
import GroupedProductHeaderRow from './GroupedProductHeaderRow';

class ProductTable extends React.Component {
    render() {
    let rows = [];
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
        rows.sort(function(a, b){
        if(a.props.product.Mark < b.props.product.Mark) return -1;
        if(a.props.product.Mark > b.props.product.Mark) return 1;
        return 0;
      }); 
    }
    if(this.props.sortByType === true){
        rows.sort(function(a, b){
        if(a.props.product.Type < b.props.product.Type) return -1;
        if(a.props.product.Type > b.props.product.Type) return 1;
        return 0;
      }); 
    }
    if(this.props.sortByYear === true){
        rows.sort(function(a, b){
        if(a.props.product.Year < b.props.product.Year) return -1;
        if(a.props.product.Year > b.props.product.Year) return 1;
        return 0;
      });
    }
    if(this.props.groupByMark === true){
      rows.sort(function(a, b){
        if(a.props.product.Mark < b.props.product.Mark) return -1;
        if(a.props.product.Mark > b.props.product.Mark) return 1;
        return 0;
      }); 
      let grouped_rows = [];
      let header = {Id: null, Mark: null, Type: null, Year: null};
      for (let i = 0; i < rows.length; i++){
        if (i === 0){          
          header.Id = rows.length + i + 1;
          header.Mark = rows[i].props.product.Mark;
          grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
          grouped_rows.push(rows[i]);
        } else if (rows[i].props.product.Mark !== rows[i-1].props.product.Mark){
          header.Id = rows.length + i + 1;
          header.Mark = rows[i].props.product.Mark; 
          grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
          grouped_rows.push(rows[i]);
        } else {
          grouped_rows.push(rows[i]);
        } 
      }
      return(
        <table className="Cars">
          <thead className="Cars-header">
          </thead>
          <tbody className="Cars-body">{grouped_rows}</tbody>
        </table>
      );
    }
    if(this.props.groupByType === true){
      rows.sort(function(a, b){
        if(a.props.product.Type < b.props.product.Type) return -1;
        if(a.props.product.Type > b.props.product.Type) return 1;
        return 0;
      }); 
      let grouped_rows = [];
      let header = {Id: null, Mark: null, Type: null, Year: null};
      for (let i = 0; i < rows.length; i++){
        if (i === 0){          
          header.Id = rows.length + i + 1;
          header.Type = rows[i].props.product.Type;
          grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
          grouped_rows.push(rows[i]);
        } else if (rows[i].props.product.Type !== rows[i-1].props.product.Type){
          header.Id = rows.length + i + 1;
          header.Type = rows[i].props.product.Type; 
          grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
          grouped_rows.push(rows[i]);
        } else {
          grouped_rows.push(rows[i]);
        } 
        console.log('i = '+ i +', header.Type = ' + header.Type);
      }
      return(
        <table className="Cars">
          <thead className="Cars-header">
          </thead>
          <tbody className="Cars-body">{grouped_rows}</tbody>
        </table>
      );
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