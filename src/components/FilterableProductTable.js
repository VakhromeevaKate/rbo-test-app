import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          filterText: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    render() {
        return (
            <div>
            <SearchBar 
                filterText={this.state.filterText}
                onUserInput={this.handleUserInput}/>
            <ProductTable 
                products={this.props.products} 
                filterText={this.state.filterText}/>
            </div>
        );
    }
    handleUserInput(filterText) {
        this.setState({
          filterText: filterText
        });
    }
}
export default FilterableProductTable;