/**
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import HomeScreen from 'HomeScreen';

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: HomeScreen,
  },
});

module.exports = ModalStack;
