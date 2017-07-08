/**
 * @flow
 */

import type { Action } from '../actions/types';
import {
  FETCH_RECOMMENDATIONS,
  FETCH_RECOMMENDATIONS_SUCCEED,
  FETCH_RECOMMENDATIONS_FAILED
} from '../actions/recommendations';
import type { App } from './apps';

export type State = {
  isLoading: boolean,
  recommendations: ?Array<App>
};

const initialState = {
  isLoading: false,
  recommendations: null
};

function recommendations(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCH_RECOMMENDATIONS:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_RECOMMENDATIONS_SUCCEED:
      return {
        isLoading: false,
        recommendations: action.recommendations
      }
    case FETCH_RECOMMENDATIONS_FAILED:
      return {
        ...state,
        isLoading: false
      }
  }
  return state;
}

export default recommendations;
