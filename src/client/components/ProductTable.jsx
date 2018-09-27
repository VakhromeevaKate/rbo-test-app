// @flow

import React, { PureComponent } from 'react';
import ProductRow from './ProductRow';
import ProductHeaderRow from './ProductHeaderRow';
import GroupedProductHeaderRow from './GroupedProductHeaderRow';
import ProductDetails from './ProductDetails';
import CommonProducts from './CommonProducts';
import * as Type from '../flowtypes/ProductTableTypes';

class ProductTable extends PureComponent <Type.Props, Type.State> {
    constructor(props: Type.Props){
        super(props);
        this.state = {
            showDetails: false,
            productId: '',
            productRowId: 0
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
                products={this.props.products}>
                <CommonProducts 
                productId={this.state.productId}
                productRowId={this.state.productRowId}
                products={this.props.products}/>
            </ProductDetails>
        )
    }
        return (
            <table className="Cars">
                <thead className="Cars-header">
                    <ProductHeaderRow mark="Mark" model="Model" type="Type" year="Year"/>
                </thead>
                <tbody className="Cars-body">{rows.map(row => {
                    if(row instanceof Type.AutoHeader){
                        return <GroupedProductHeaderRow product={row} key={row.Id}/>
                    }
                    return (<ProductRow 
                        showDetails={this.handleShowDetails} 
                        product={row} 
                        key={row.Id}/>)})}
                </tbody>
            </table>
        );
    }

    filter(): Type.Auto[] {
        const { filterText, products } = this.props;
        let rows: Type.Auto[] = [];
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
    sortByMark(rows: Type.Auto[]): Type.Auto[] {
        return rows.sort((a: Type.Auto, b: Type.Auto) => (a.Mark > b.Mark ? 1 : (a.Mark === b.Mark ? 0 : -1 )) );
    }

    sortByType(rows: Type.Auto[]): Type.Auto[] {
        return rows.sort((a: Type.Auto, b: Type.Auto) => (a.Type > b.Type ? 1 : (a.Type === b.Type ? 0 : -1 )) );
    }

    sortByYear(rows: Type.Auto[]): Type.Auto[] {
        return rows.sort((a: Type.Auto, b: Type.Auto) => a.Year - b.Year);
    }

    groupByMark(rows: Type.Auto[]): any[]{
        this.sortByMark(rows);
        return rows.reduce((result, row, index) => {
            if (index === 0 || row.Mark !== rows[index-1].Mark) {
                let header = {Id: rows.length + index + 1, Mark: row.Mark, Type: null, className: "GroupHeader"};    
                result.push(header);
            }
            result.push(row);
            return result;
        }, []);
    }

    groupByType(rows: Type.Auto[]): any[] {
        this.sortByType(rows);
        return rows.reduce((result, row, index) => {
            if (index === 0 || row.Type !== rows[index-1].Type) {
                let header: Type.AutoHeader = {Id: (rows.length + index + 1).toString(), Mark: null, Type: row.Type, className: "GroupHeader"};    
                result.push(header);
            }
            result.push(row);
            return result;
        }, []);
    }

    handleShowDetails = (value: boolean, id: string, row: number) => {
        this.setState({
                showDetails: value,
                productId: id,
                productRowId: row
        });
    }
}
export default ProductTable;
