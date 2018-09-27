// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FilterableProductTable from '../components/FilterableProductTable';
import PrepareData from '../utils/PrepareData';
import * as Type from '../flowtypes/AppTypes';

import PropTypes from 'prop-types';

class App extends PureComponent<Type.Props, Type.State> {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            autos: [],
            attributes: [],
            colors: [],
            countries: [],
            options: []
        };
    }

    render() {
        const data = this.props.appState.data;
        const products = PrepareData(data.autos, data.attributes, data.colors, data.countries, data.options);

        return (
            <div>
                <FilterableProductTable
                    products={products}
                    ready={data.ready} />
            </div>
        );
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps !== nextProps) {
            return nextProps;
        }

        return prevProps;
    }
}

export default connect(
    state => ({
        appState: state
    })
)(App);
