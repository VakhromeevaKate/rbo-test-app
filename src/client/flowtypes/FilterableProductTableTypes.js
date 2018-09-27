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
    ready: boolean,
    products: Auto[]
}

export type State = {
    filterText: string,
    sortByMark: boolean,
    sortByType: boolean,
    sortByYear: boolean,
    groupByMark: boolean,
    groupByType:  boolean,
    showDetails: boolean
}