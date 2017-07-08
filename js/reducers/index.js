/**
 * @flow
 */

import { combineReducers } from 'redux';
import apps from './apps';
import recommendations from './recommendations';

const reducers = combineReducers({
  apps,
  recommendations
});

export default reducers;
