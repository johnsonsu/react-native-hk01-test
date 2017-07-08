/**
 * @flow
 * @providesModule SearchBar
 */

import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

type Props = {
  onChangeText: (text: string) => void
}

class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          onChangeText={this.props.onChangeText}
           placeholder="Search" />
      </View>
    );
  }
}

const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: WIDTH,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5
  },
  textInput: {
    height: 28,
    fontSize: 14,
    width: WIDTH - 20,
    backgroundColor: '#dddddd',
    borderRadius: 6,
    textAlign: 'center'
  }
});

export default SearchBar;