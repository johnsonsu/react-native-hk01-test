/**
 * @flow
 * @providesModule SearchBar
 */

'use strict';

import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

type Props = {
  onChangeText: (text: string) => void
};

class SearchBar extends React.Component {
  props: Props;
  _searchBar: SearchBar;

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={searchBar => {
            this._searchBar = searchBar;
          }}
          style={styles.textInput}
          onChangeText={this.props.onChangeText}
          returnKeyType="search"
          placeholder="Search"
          blurOnSubmit={true}
          underlineColorAndroid="transparent"
        />
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
    textAlign: 'center',
    paddingVertical: 0
  }
});

export default SearchBar;
