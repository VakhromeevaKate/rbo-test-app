// @flow
import PropTypes from 'prop-types';

export type Props = {
    appState: {
        data: {
            ready: boolean,
            autos: Array<any>,
            attributes: Array<any>,
            colors: Array<any>,
            countries: Array<any>,
            options: Array<any>
        }
    }
}

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

export type State = {
    ready: boolean,
    autos: Array<any>,
    attributes: Array<any>,
    colors: Array<any>,
    countries: Array<any>,
    options: Array<any>,
    product: Auto | null,
    products: Auto[] | null
}