// @flow

import { createStore, compose } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(typeof window === 'object' && typeof window.devTools !== 'undefined' ? window.devToolsExtensions() : f => f)
);
export default store;
