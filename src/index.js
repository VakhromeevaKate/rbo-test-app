import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import App from './components/App';
import { fetchAutos, fetchAttributes, fetchColors, fetchCountries, fetchOptions } from './actions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
    ),
);
  
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
