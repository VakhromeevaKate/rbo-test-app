import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const data = handleActions({
    [action.fetchAutosSuccess](state, { payload }) {
        return {...state, data: {...data, autos: keyBy(payload.autos, 'ID')}};
    },
    [action.fetchAttributesSuccess](state, { payload }) {
        return {...state, data: {...data, attributes: keyBy(payload.attributes, 'ID')}};
    },
    [action.fetchColorsSuccess](state, { payload }) {
        return {...state, data: {...data, colors: keyBy(payload.colors, 'ID')}};
    },
    [action.fetchCountriesSuccess](state, { payload }) {
        return {...state, data: {...data, countries: keyBy(payload.countries, 'ISO')}};
    },
    [action.fetchOptionsSuccess](state, { payload }) {
        return {...state, data: {...data, options: keyBy(payload.options, 'Attribute')}};
    }, 
}, {});


export default combineReducers({
    data
});

  