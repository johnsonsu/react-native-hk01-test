/**
 * @flow
 */

import { FETCH_APPS, FETCH_APPS_FAILED, FETCH_APPS_SUCCEED } from './apps';
import type { App } from '../reducers/apps';

export type Action =
  | { type: 'FETCH_APPS' }
  | { type: 'FETCH_APPS_SUCCEED', apps: Array<App> }
  | { type: 'FETCH_APPS_FAILED' };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
