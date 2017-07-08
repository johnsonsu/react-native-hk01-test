/**
 * @flow
 * @providesModule EmptyList
 */

import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

class EmptyList extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default EmptyList;
