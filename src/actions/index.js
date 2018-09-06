import { createAction } from 'redux-actions';
import autoDataset from '../data-input/data-auto.csv';

export const fetchAutosRequest = createAction('AUTOS_FETCH_REQUEST');
export const fetchAutosSuccess = createAction('AUTOS_FETCH_SUCCESS');
export const fetchAutosFailure = createAction('AUTOS_FETCH_FAILURE');

export const fetchAutos = () => async (dispatch) => {
  dispatch(fetchAutosRequest());
  try {
    const response = fetch(autoDataset)
    .then(function(data) {
        return data.ok ? data.text() : Promise.reject(data.status);
    }).then(function(data){
      return data
    });
    dispatch(fetchAutosSuccess({ autos: response.data }));
    console.log(response);
  } catch (e) {
    dispatch(fetchAutosFailure());
  }
};
  /*export const fetchAutos = () => async (dispatch) => {
    dispatch(fetchAutosRequest());
    try {
      console.log('Life is good!');
    } catch (e) {
      console.log('Life is not too good...');
    }
  }*/
