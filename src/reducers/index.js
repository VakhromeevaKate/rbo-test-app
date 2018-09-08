import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

let counter = 0;

const data = handleActions({
    [action.fetchAutosSuccess](state, { payload }) {
        counter ++;
        return {...state, ready: (counter === 5 ? true : false), autos: keyBy(payload.autos, 'ID')};
    },
    [action.fetchAttributesSuccess](state, { payload }) {
        counter ++;
        return {...state, ready: (counter === 5 ? true : false), attributes: keyBy(payload.attributes, 'ID')};
    },
    [action.fetchColorsSuccess](state, { payload }) {
        counter ++;
        return {...state, ready: (counter === 5 ? true : false), colors: keyBy(payload.colors, 'ID')};
    },
    [action.fetchCountriesSuccess](state, { payload }) {
        counter ++;
        return {...state, ready: (counter === 5 ? true : false), countries: keyBy(payload.countries, 'ISO')};
    },
    [action.fetchOptionsSuccess](state, { payload }) {
        counter ++;
        return {...state, ready: (counter === 5 ? true : false), options: keyBy(payload.options, 'Attribute')};
    }, 
}, {});

export default combineReducers({
    data
});

  