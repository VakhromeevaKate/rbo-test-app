// @flow

import PropTypes from 'prop-types';

export type Auto = {
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
    product: Auto
};