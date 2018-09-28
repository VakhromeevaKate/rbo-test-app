// 

import React, { PureComponent } from 'react';
import SearchBar from '../search/SearchBar';
import ProductTable from './ProductTable';
import * as Type from '../flowtypes/FilterableProductTableTypes';
import './FilterableProductTable.css';

class FilterableProductTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            sortByMark: false,
            sortByType: false,
            sortByYear: false,
            groupByMark: false,
            groupByType: false,
            showDetails: false
        };
    }

    render() {
        if (!this.props.ready) {
                return (<div><p>Data is loading...</p></div>)
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">RBO Test App</h1>
                </header>
                <h3>Searching for a car?</h3>
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
            </div>
        );
    }

    handleUserInput = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }
    handleGroupByMark = () => {
        this.setState({
            groupByMark: true,
            groupByType: false,
            sortByMark: false,
            sortByType: false,
            sortByYear: false,
            showDetails: false
        });
    }
    handleGroupByType = () => {
        this.setState({
            groupByMark: false,
            groupByType: true,
            sortByMark: false,
            sortByType: false,
            sortByYear: false,
            showDetails: false
        });
    }
    handleSortByMark = () => {
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: true,
            sortByType: false,
            sortByYear: false,
            showDetails: false
        });
    }
    handleSortByType = () => {
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: false,
            sortByType: true,
            sortByYear: false,
            showDetails: false
        });
    }
    handleSortByYear = () => {
        this.setState({
            groupByMark: false,
            groupByType: false,
            sortByMark: false,
            sortByType: false,
            sortByYear: true,
            showDetails: false
        });
    }
}
export default FilterableProductTable;
