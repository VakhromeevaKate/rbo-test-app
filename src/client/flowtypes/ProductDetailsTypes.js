// @flow

import PropTypes from 'prop-types';

export type Auto = {
    Row:        number,
    Id:         string,
    Mark:       string,
    Model:      string,
    Type:       string,
    Country:    string,
    Color:      string,
    Options:    string,
    Year:       number
}

export type Props = {
    products: Auto[],
    productId: string,
    productRowId: number,
    showDetails: any,
    children: any
};