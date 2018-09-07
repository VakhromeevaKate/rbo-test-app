import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';
import { stat } from 'fs';

const initialState = {loaded: false};

const data = handleActions({
    [action.fetchAutosSuccess](state, { payload }) {
      return keyBy(payload.autos, 'ID');
    },
    [action.fetchAttributesSuccess](state, { payload }) {
        return keyBy(payload.attributes, 'ID');
    },
    [action.fetchColorsSuccess](state, { payload }) {
        return keyBy(payload.colors, 'ID');
    },
    [action.fetchCountriesSuccess](state, { payload }) {
        return keyBy(payload.countries, 'ISO');
    },
    [action.fetchOptionsSuccess](state, { payload }) {
        return keyBy(payload.options, 'Attribute');
    }, 
}, {});

export function reducerRequest (state = initialState) {
    switch(action) {
        case 'AUTOS_FETCH_REQUEST': 
            console.log(action);
            return {...state, autos: null, fetching: true };
        case 'ATTRIBUTES_FETCH_REQUEST': 
            return {...state, attributes: null, fetching: true };
        case 'COLORS_FETCH_REQUEST': 
            return {...state, colors: null, fetching: true };
        case 'COUNTRIES_FETCH_REQUEST': 
            return {...state, countries: null, fetching: true };
        case 'OPTIONS_FETCH_REQUEST': 
            return {...state, option: null, fetching: true };
        default: 
            return state;
    }
}

function reducerSuccess (state = initialState) {
    switch(action) {
        case 'AUTOS_FETCH_SUCCESS': 
            console.log(action);
            return {...state, autos: null, fetching: true };
        case 'ATTRIBUTES_FETCH_SUCCESS': 
            return {...state, attributes: null, fetching: true };
        case 'COLORS_FETCH_SUCCESS': 
            return {...state, colors: null, fetching: true };
        case 'COUNTRIES_FETCH_SUCCESS': 
            return {...state, countries: null, fetching: true };
        case 'OPTIONS_FETCH_SUCCESS': 
            return {...state, option: null, fetching: true };
        default: 
            return state;
    }
}

function reducerFailure (state = initialState) {
    switch(action) {
        case 'AUTOS_FETCH_FAILURE': 
            console.log(action);
            return {...state, autos: null, fetching: true };
        case 'ATTRIBUTES_FETCH_FAILURE': 
            return {...state, attributes: null, fetching: true };
        case 'COLORS_FETCH_FAILURE': 
            return {...state, colors: null, fetching: true };
        case 'COUNTRIES_FETCH_FAILURE': 
            return {...state, countries: null, fetching: true };
        case 'OPTIONS_FETCH_FAILURE': 
            return {...state, option: null, fetching: true };
        default: 
            return state;
    }
}

export default combineReducers({
    reducerRequest,
    reducerSuccess,
    reducerFailure,
    data
});

  