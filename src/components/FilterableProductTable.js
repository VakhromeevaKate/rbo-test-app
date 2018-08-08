import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          sortByMark: '',
          sortByType: '',
          sortByYear: '',
          groupByMark: '',
          groupByType: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSortByMark = this.handleSortByMark.bind(this);
        this.handleSortByType = this.handleSortByType.bind(this);
        this.handleSortByYear = this.handleSortByYear.bind(this);
        this.handleGroupByMark = this.handleGroupByMark.bind(this);
        this.handleGroupByType = this.handleGroupByType.bind(this);
    }

    render() {
        return (
            <div>
            <SearchBar 
                filterText={this.state.filterText}
                onSortByMark={this.handleSortByMark}
                onSortByType={this.handleSortByType}
                onSortByYear={this.handleSortByYear}
                onGroupByMark={this.handleGroupByMark}
                onGroupByType={this.handleGroupByType}
                onUserInput={this.handleUserInput}/>
            <ProductTable 
                products={this.props.products} 
                filterText={this.state.filterText}
                sortByMark={this.state.sortByMark}
                sortByType={this.state.sortByType}
                sortByYear={this.state.sortByYear}
                groupByMark={this.state.groupByMark}
                groupByType={this.state.groupByType}/>
            </div>
        );
    }
    handleUserInput(filterText) {
        this.setState({
          filterText: filterText
        });
    }
    handleGroupByMark(){
        console.log('I am here: handleGroupByMark')
        this.setState({
            groupByMark: true,
            groupByType: false,
            sortByMark: false,
            sortByType: false,
            sortByYear: false
        });
    }
    handleGroupByType(){
        console.log('I am here: handleGroupByType')
        this.setState({
            groupByMark: false,
            groupByType: true,
            sortByMark: false,
            sortByType: false,
            sortByYear: false
        });
    }
    handleSortByMark(){
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: true,
            sortByType: false,
            sortByYear: false
        });
    }
    handleSortByType(){
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: false,
            sortByType: true,
            sortByYear: false
        });
    }
    handleSortByYear(){
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: false,
            sortByType: false,
            sortByYear: true
        });
    }
}
export default FilterableProductTable;