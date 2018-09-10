import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './containers/App';
import { fetchAutos, fetchAttributes, fetchColors, fetchCountries, fetchOptions } from './actions';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(fetchAutos());
store.dispatch(fetchAttributes());
store.dispatch(fetchColors());
store.dispatch(fetchCountries());
store.dispatch(fetchOptions());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
