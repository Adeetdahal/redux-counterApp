import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers/index';

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const store = configureStore(rootReducers);

export default store;
