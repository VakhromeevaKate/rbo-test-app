import React from 'react';
import ProductRow from './ProductRow';
import GroupedProductHeaderRow from './GroupedProductHeaderRow';
import ProductDetails from './ProductDetails';

class ProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: '',
      productId: null,
      productRowId: null
    };
    this.handleShowDetails = this.handleShowDetails.bind(this);
  }

  filter(){
    let rows = [];
    this.props.products.forEach((product) => {
      if (product.Mark.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Model.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Type.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
          product.Year.toString().indexOf(this.props.filterText) === -1 ) {
        return;
      }
      rows.push(<ProductRow showDetails={this.handleShowDetails} product={product} key={product.Id} />);
    });
    return rows;
  }
  // These fields are string typed. Is there any elegant way to compare them?
  sortByMark(rows) {
    rows.sort(function(a, b){
      if(a.props.product.Mark < b.props.product.Mark) return -1;
      if(a.props.product.Mark > b.props.product.Mark) return 1;
      return 0;
    }); 
    return rows;
  }

  sortByType(rows) {
    rows.sort(function(a, b){
      if(a.props.product.Type < b.props.product.Type) return -1;
      if(a.props.product.Type > b.props.product.Type) return 1;
      return 0;
    }); 
    return rows;
  }

  sortByYear(rows) {
    rows.sort(function(a, b){
      return (a.props.product.Year - b.props.product.Year);
    });
    return rows;
  }

  groupByMark(rows){
    this.sortByMark(rows);
    let grouped_rows = [];
    for (let i = 0; i < rows.length; i++){
      if (i === 0){        
        let header = {Id: null, Mark: null, Type: null, Year: null};  
        header.Id = rows.length + i + 1;
        header.Mark = rows[i].props.product.Mark;
        grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
        grouped_rows.push(rows[i]);
      } else if (rows[i].props.product.Mark !== rows[i-1].props.product.Mark){
        let header = {Id: null, Mark: null, Type: null, Year: null}; 
        header.Id = rows.length + i + 1;
        header.Mark = rows[i].props.product.Mark; 
        grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
        grouped_rows.push(rows[i]);
      } else {
        grouped_rows.push(rows[i]);
      } 
    }
    return grouped_rows;
  }

  groupByType(rows) {
    let grouped_rows = [];
    this.sortByType(rows);
    for (let i = 0; i < rows.length; i++){
      if (i === 0){  
        let header = {Id: null, Mark: null, Type: null, Year: null};        
        header.Id = rows.length + i + 1;
        header.Type = rows[i].props.product.Type;
        grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
        grouped_rows.push(rows[i]);
      } else if (rows[i].props.product.Type !== rows[i-1].props.product.Type){
        let header = {Id: null, Mark: null, Type: null, Year: null};
        header.Id = rows.length + i + 1;
        header.Type = rows[i].props.product.Type; 
        grouped_rows.push(<GroupedProductHeaderRow product={header} key={header.Id}/>);
        grouped_rows.push(rows[i]);
      } else {
        grouped_rows.push(rows[i]);
      } 
    }
    return grouped_rows;
  }

  render() {
  let rows = this.filter();
  if(this.props.sortByMark === true){
      this.sortByMark(rows);
  }
  if(this.props.sortByType === true){
      this.sortByType(rows);
  }
  if(this.props.sortByYear === true){
      this.sortByYear(rows);
  }
  if(this.props.groupByMark === true){
    rows = this.groupByMark(rows);
  }
  if(this.props.groupByType === true){
    rows = this.groupByType(rows);
  }
  if (this.state.showDetails === true){
    return (
      <ProductDetails 
        showDetails={this.handleShowDetails} 
        productId={this.state.productId}
        productRowId={this.state.productRowId}
        products={this.props.products}/>
    )
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

  handleShowDetails(value, id, row){
    this.setState({
        showDetails: value,
        productId: id,
        productRowId: row
    });
  }
}
  export default ProductTable;