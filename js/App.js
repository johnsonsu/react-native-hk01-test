/**
 * @flow
 */

import { StackNavigator } from 'react-navigation';
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

export default ModalStack;
