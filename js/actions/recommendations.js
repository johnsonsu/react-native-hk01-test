/**
 * @flow
 */

import type { Dispatch, GetState, Action, ThunkAction } from './types';
import type { App } from '../reducers/apps';

export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS';
export const FETCH_RECOMMENDATIONS_SUCCEED = 'FETCH_RECOMMENDATIONS_SUCCEED';
export const FETCH_RECOMMENDATIONS_FAILED = 'FETCH_RECOMMENDATIONS_FAILED';

function fetchRecommendationSucceed(recommendations: Array<App>): Action {
  return {
    type: FETCH_RECOMMENDATIONS_SUCCEED,
    recommendations
  };
}

function fetchRecommendationFailed(): Action {
  return {
    type: FETCH_RECOMMENDATIONS_FAILED
  };
}

export function fetchRecommendations(): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({ type: FETCH_RECOMMENDATIONS });
    fetch(
      'https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json'
    )
      .then(response => response.json())
      .then(json => {
        dispatch(fetchRecommendationSucceed(json.feed.entry));
      })
      .catch(error => {
        console.warn(error);
        dispatch(fetchRecommendationFailed());
        if (!getState().recommendations.recommendations) {
          setTimeout(() => dispatch(fetchRecommendations()), 500); // re-fetch after 500 ms
        }
      });
  };
}
