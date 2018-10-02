function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

let counter = 0;

const data = handleActions({
  [action.fetchAutosSuccess](state, { payload }) {
    counter++;
    return _objectSpread({}, state, { ready: counter === 5 ? true : false, autos: payload.autos });
  },
  [action.fetchAttributesSuccess](state, { payload }) {
    counter++;
    return _objectSpread({}, state, { ready: counter === 5 ? true : false, attributes: payload.attributes });
  },
  [action.fetchColorsSuccess](state, { payload }) {
    counter++;
    return _objectSpread({}, state, { ready: counter === 5 ? true : false, colors: payload.colors });
  },
  [action.fetchCountriesSuccess](state, { payload }) {
    counter++;
    return _objectSpread({}, state, { ready: counter === 5 ? true : false, countries: payload.countries });
  },
  [action.fetchOptionsSuccess](state, { payload }) {
    counter++;
    return _objectSpread({}, state, { ready: counter === 5 ? true : false, options: payload.options });
  } },
{});

export default combineReducers({
  data });