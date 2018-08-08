import React from 'react';

class ProductRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    };
    this.handleClickShowDetails = this.handleClickShowDetails.bind(this);
  }  
  render() {
      return (
        <tr onClick={this.handleClickShowDetails}>
          <td>{this.props.product.Mark}</td>
          <td>{this.props.product.Model}</td>
          <td>{this.props.product.Type}</td>
          <td>{this.props.product.Year}</td>
        </tr>
      );
    }
    handleClickShowDetails(){
      alert();
    }
  }
  
export default ProductRow;