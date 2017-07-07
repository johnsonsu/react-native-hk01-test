/**
 * @flow
 */

import type { Dispatch, GetState, Action, ThunkAction } from './types';
import type { App } from '../reducers/apps';

export const FETCH_APPS = 'FETCH_APPS';
export const FETCH_APPS_SUCCEED = 'FETCH_APPS_SUCCEED';
export const FETCH_APPS_FAILED = 'FETCH_APPS_FAILED';

function fetchAppSucceed(apps: Array<App>): Action {
  return {
    type: FETCH_APPS_SUCCEED,
    apps
  };
}

function fetchAppFailed(): Action {
  return {
    type: FETCH_APPS_FAILED
  };
}

export function fetchApps(): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({ type: FETCH_APPS });
    fetch(
      'https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json'
    )
      .then(response => response.json())
      .then(json => {
        dispatch(fetchAppSucceed(json.feed.entry));
      })
      .catch(error => {
        console.warn(error);
        dispatch(fetchAppFailed());
      });
  };
}
