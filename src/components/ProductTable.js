import React, { PureComponent } from 'react';
import ProductRow from './ProductRow';
import ProductHeaderRow from './ProductHeaderRow';
import GroupedProductHeaderRow from './GroupedProductHeaderRow';
import ProductDetails from './ProductDetails';

class ProductTable extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      showDetails: '',
      productId: null,
      productRowId: null
    };
  }
  
  render() {
  let rows = this.filter();
  if(this.props.sortByMark){
      this.sortByMark(rows);
  }
  if(this.props.sortByType){
      this.sortByType(rows);
  }
  if(this.props.sortByYear){
      this.sortByYear(rows);
  }
  if(this.props.groupByMark){
    rows = this.groupByMark(rows);
  }
  if(this.props.groupByType){
    rows = this.groupByType(rows);
  }
  if (this.state.showDetails){
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
          <ProductHeaderRow mark="Mark" model="Model" type="Type" year="Year"/>
        </thead>
        <tbody className="Cars-body">{rows.map(row => {
          if(row.className){
            return <GroupedProductHeaderRow product={row} key={row.Id}/>
          }
          return (<ProductRow 
            showDetails={this.handleShowDetails} 
            product={row} 
            key={row.Id}
            />)})}
        </tbody>
      </table>
    );
  }

  filter(){
    const { filterText, products } = this.props;
    let rows = [];
    products.forEach((product) => {
      if (product.Mark.toUpperCase().indexOf(filterText.toUpperCase()) === -1 &&
          product.Model.toUpperCase().indexOf(filterText.toUpperCase()) === -1 &&
          product.Type.toUpperCase().indexOf(filterText.toUpperCase()) === -1 &&
          product.Year.toString().indexOf(filterText) === -1 ) {
        return;
      }
      rows.push(product);
    });
    return rows;
  }
  // These fields are string typed. Is there any elegant way to compare them?
  sortByMark(rows) {
    rows.sort(function(a, b){
      if(a.Mark < b.Mark) return -1;
      if(a.Mark > b.Mark) return 1;
      return 0;
    }); 
    return rows;
  }

  sortByType(rows) {
    rows.sort(function(a, b){
      if(a.Type < b.Type) return -1;
      if(a.Type > b.Type) return 1;
      return 0;
    }); 
    return rows;
  }

  sortByYear(rows) {
    rows.sort(function(a, b){
      return (a.Year - b.Year);
    });
    return rows;
  }

  groupByMark(rows){
    this.sortByMark(rows);
    let grouped_rows = [];
    for (let i = 0; i < rows.length; i++){
      if (i === 0){        
        let header = {Id: null, Mark: null, className: "GroupHeader"};  
        header.Id = rows.length + i + 1;
        header.Mark = rows[i].Mark;
        grouped_rows.push(header);
        grouped_rows.push(rows[i]);
      } else if (
        rows[i].Mark !== rows[i-1].Mark
        ){
          let header = {Id: null, Mark: null, className: "GroupHeader"}; 
        header.Id = rows.length + i + 1;
        header.Mark = rows[i].Mark;
        grouped_rows.push(header);
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
        let header = {Id: null, Type: null, className: "GroupHeader"};        
        header.Id = rows.length + i + 1;
        header.Type = rows[i].Type;
        grouped_rows.push(header);
        grouped_rows.push(rows[i]);
      } else if (rows[i].Type !== rows[i-1].Type){
        let header = {Id: null, Type: null, className: "GroupHeader"};
        header.Id = rows.length + i + 1;
        header.Type = rows[i].Type; 
        grouped_rows.push(header);
        grouped_rows.push(rows[i]);
      } else {
        grouped_rows.push(rows[i]);
      } 
    }
    return grouped_rows;
  }

  handleShowDetails = (value, id, row) => {
    this.setState({
        showDetails: value,
        productId: id,
        productRowId: row
    });
  }
}
  export default ProductTable;