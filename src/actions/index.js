import { createAction } from 'redux-actions';
import autoDataset from '../data-input/data-auto.csv';
import attributesDataset from '../data-input/data-attributes.csv';
import colorsDataset from '../data-input/data-colors.csv';
import countriesDataset from '../data-input/data-countries.csv';
import optionsDataset from '../data-input/data-options.csv';
import Papa from 'papaparse';

const config = {
  delimiter: ',',
  quoteChar: '"',
  escapeChar: '"',
  header: true,
  trimHeaders: false
} 

export const fetchAutosRequest = createAction('AUTOS_FETCH_REQUEST');
export const fetchAutosSuccess = createAction('AUTOS_FETCH_SUCCESS');
export const fetchAutosFailure = createAction('AUTOS_FETCH_FAILURE');

export const fetchAutos = () => async (dispatch) => {
  dispatch(fetchAutosRequest());
  try {
    fetch(autoDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchAutosSuccess({ autos: data }));
      });
  } catch (e) {
    dispatch(fetchAutosFailure());
  }
};


export const fetchAttributesRequest = createAction('ATTRIBUTES_FETCH_REQUEST');
export const fetchAttributesSuccess = createAction('ATTRIBUTES_FETCH_SUCCESS');
export const fetchAttributesFailure = createAction('ATTRIBUTES_FETCH_FAILURE');

export const fetchAttributes = () => async (dispatch) => {
  dispatch(fetchAttributesRequest());
  try {
    fetch(attributesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchAttributesSuccess({ attributes: data }));
      }); 
  } catch (e) {
    dispatch(fetchAttributesFailure());
  }
};

export const fetchColorsRequest = createAction('COLORS_FETCH_REQUEST');
export const fetchColorsSuccess = createAction('COLORS_FETCH_SUCCESS');
export const fetchColorsFailure = createAction('COLORS_FETCH_FAILURE');

export const fetchColors = () => async (dispatch) => {
  dispatch(fetchColorsRequest());
  try {
    fetch(colorsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchColorsSuccess({ colors: data }));
      }); 
  } catch (e) {
    dispatch(fetchColorsFailure());
  }
};

export const fetchCountriesRequest = createAction('COUNTRIES_FETCH_REQUEST');
export const fetchCountriesSuccess = createAction('COUNTRIES_FETCH_SUCCESS');
export const fetchCountriesFailure = createAction('COUNTRIES_FETCH_FAILURE');

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    fetch(countriesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchCountriesSuccess({ countries: data }));
      }); 
  } catch (e) {
    dispatch(fetchCountriesFailure());
  }
};

export const fetchOptionsRequest = createAction('OPTIONS_FETCH_REQUEST');
export const fetchOptionsSuccess = createAction('OPTIONS_FETCH_SUCCESS');
export const fetchOptionsFailure = createAction('OPTIONS_FETCH_FAILURE');

export const fetchOptions = () => async (dispatch) => {
  dispatch(fetchOptionsRequest());
  try {
    fetch(optionsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchOptionsSuccess({ options: data }));
      }); 
  } catch (e) {
    dispatch(fetchOptionsFailure());
  }
};