import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './client/containers/App';
import { fetchAutos, fetchAttributes, fetchColors, fetchCountries, fetchOptions } from './client/actions';
import configureStore from './client/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(fetchAutos());
store.dispatch(fetchAttributes());
store.dispatch(fetchColors());
store.dispatch(fetchCountries());
store.dispatch(fetchOptions());

ReactDOM.render(
React.createElement(Provider, { store: store },
React.createElement(App, null)),
document.getElementById('root'));

registerServiceWorker();