/**
 * @flow
 */

import type { App } from '../reducers/apps';

export type Action =
  | { type: 'FETCH_APPS' }
  | { type: 'FETCH_APPS_SUCCEED', apps: Array<App> }
  | { type: 'FETCH_APPS_FAILED' }
  | { type: 'FETCH_RECOMMENDATIONS' }
  | { type: 'FETCH_RECOMMENDATIONS_SUCCEED', recommendations: Array<App>}
  | { type: 'FETCH_RECOMMENDATIONS_FAILED' };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
