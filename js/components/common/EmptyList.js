/**
 * @flow
 * @providesModule EmptyList
 */

import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

type Props = {
  isLoading: boolean
};

class EmptyList extends React.PureComponent {
  props: Props;

  render() {
    const content = this.props.isLoading ?
        <ActivityIndicator /> : <Text style={styles.noResultText}>No Result</Text>

    return (
      <View style={styles.container}>
        {content}
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
  },
  noResultText: {
    fontSize: 20,
    color: 'gray'
  }
});

export default EmptyList;
