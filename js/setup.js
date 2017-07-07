/**
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import App from './App';


function setup() {
  let store = createStore(reducers, applyMiddleware(thunk, logger));

  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
