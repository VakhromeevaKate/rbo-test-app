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

export type State = {
    ready: boolean,
    autos: Array<any>,
    attributes: Array<any>,
    colors: Array<any>,
    countries: Array<any>,
    options: Array<any>
}