import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

export default function configureStore() {
  const initialState = {
    data: {
      ready: false,
      autos: [],
      attributes: [],
      colors: [],
      countries: [],
      options: [] } };



  const store = createStore(
  reducer,
  initialState,
  compose(
  applyMiddleware(thunk),
  devtoolMiddleware));



  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}