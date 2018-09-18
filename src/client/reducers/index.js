import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

let counter = 0;

const data = handleActions({
  [action.fetchAutosSuccess](state, { payload }) {
    counter ++;
    return {...state, ready: (counter === 5 ? true : false), autos: payload.autos};
  },
  [action.fetchAttributesSuccess](state, { payload }) {
    counter ++;
    return {...state, ready: (counter === 5 ? true : false), attributes: payload.attributes};
  },
  [action.fetchColorsSuccess](state, { payload }) {
    counter ++;
    return {...state, ready: (counter === 5 ? true : false), colors: payload.colors};
  },
  [action.fetchCountriesSuccess](state, { payload }) {
    counter ++;
    return {...state, ready: (counter === 5 ? true : false), countries: payload.countries};
  },
  [action.fetchOptionsSuccess](state, { payload }) {
    counter ++;
    return {...state, ready: (counter === 5 ? true : false), options: payload.options};
  }, 
}, {});

export default combineReducers({
  data
});

  