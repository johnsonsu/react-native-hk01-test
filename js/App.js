/**
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import HomeScreen from 'HomeScreen';
import AppScreen from 'AppScreen';

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  App: {
    path: 'app/:appId',
    screen: AppScreen,
  },
});

module.exports = ModalStack;
