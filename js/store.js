// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// const store = createStore(
//   reducer,
//   compose(typeof window === 'object' && typeof window.devTools !== 'undefined' ? window.devToolsExtensions() : f => f)
// );

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
