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
    let response = fetch(autoDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchAutosSuccess({ autos: response.data }));
      console.log(data);
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
    const response = fetch(attributesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchAutosSuccess({ attributes: response.data }));
      console.log(data);
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
    const response = fetch(colorsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchAutosSuccess({ colors: response.data }));
      console.log(data);
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
    const response = fetch(countriesDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchCountriesSuccess({ countries: response.data }));
      console.log(data);
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
    const response = fetch(optionsDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      data = Papa.parse(data, config).data;
      return data;
    }).then(function(data){
      dispatch(fetchCountriesSuccess({ options: response.data }));
      console.log(data);
      }); 
  } catch (e) {
    dispatch(fetchOptionsFailure());
  }
};
