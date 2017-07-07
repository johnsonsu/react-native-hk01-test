/**
 * @flow
 */

import type { Action } from '../actions/types';
import {
  FETCH_APPS,
  FETCH_APPS_SUCCEED,
  FETCH_APPS_FAILED
} from '../actions/apps';

export type AppImage = {
  label: string,
  attributes: {
    height: number
  }
};

export type App = {
  'im:name': {
    label: string // app name
  },
  'im:image': Array<AppImage>,
  'summary': {
    label: string
  },
  'im:price': {
    label: string,
    attributes: {
      amount: number,
      currency: string
    }
  },
  title: {
    label: string
  },
  id: {
    label: string, // url
    attributes: {
      'im:id': string, // app id
      'im:bundleId': string
    }
  },
  category: {
    attributes: {
      'im:id': string,
      term: string,
      scheme: string,
      label: string // category
    }
  }
};

type State = {
  isLoading: boolean,
  apps: ?Array<App>
};

const initialState = {
  isLoading: false,
  apps: null
};

function apps(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCH_APPS:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_APPS_SUCCEED:
      return {
        isLoading: false,
        apps: action.apps
      }
    case FETCH_APPS_FAILED:
      return {
        ...state,
        isLoading: false
      }
  }
  return state;
}

module.exports = apps;
