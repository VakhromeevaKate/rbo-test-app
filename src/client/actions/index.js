import { createAction } from 'redux-actions';
import api from '../api/api';

export const fetchAutosRequest = createAction('AUTOS_FETCH_REQUEST');
export const fetchAutosSuccess = createAction('AUTOS_FETCH_SUCCESS');
export const fetchAutosFailure = createAction('AUTOS_FETCH_FAILURE');

export const fetchAutos = () => async (dispatch) => {
  dispatch(fetchAutosRequest());
  try {
    api.getAutos().then((data) => {
      const newdata = JSON.parse(data.request.response);
      return newdata;
    }).then((data) => {
      dispatch(fetchAutosSuccess(data));
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
    api.getAttributes().then((data) => {
      const newdata = JSON.parse(data.request.response);
      return newdata;
    }).then((data) => {
      dispatch(fetchAttributesSuccess(data));
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
    api.getColors().then((data) => {
      const newdata = JSON.parse(data.request.response);
      return newdata;
    }).then((data) => {
      dispatch(fetchColorsSuccess(data));
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
    api.getCountries().then((data) => {
      const newdata = JSON.parse(data.request.response);
      return newdata;
    }).then((data) => {
      dispatch(fetchCountriesSuccess(data));
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
    api.getOptions().then((data) => {
      const newdata = JSON.parse(data.request.response);
      return newdata;
    }).then((data) => {
      dispatch(fetchOptionsSuccess(data));
    });
  } catch (e) {
    dispatch(fetchOptionsFailure());
  }
};
