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
    sortByMark: boolean,
    sortByType: boolean,
    sortByYear: boolean,
    groupByMark: boolean,
    groupByType: boolean,
    filterText: string,
    products: Auto[]
}

export type State = {
    showDetails: boolean,
    productId: string,
    productRowId: number
}

export type AutoHeader = {
    Id:         string,
    Mark:       string | null,
    className:  string,
    Type:       string | null
}