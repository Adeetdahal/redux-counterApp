import counter from './counter';
import isLogged from './isLogged';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  counter,
  isLogged,
});
export default rootReducers;
