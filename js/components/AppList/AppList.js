/**
 * @flow
 * @providesModule AppList
 */

import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import type { App } from '../../reducers/apps';
import AppListItem from 'AppListItem';


type Props = {
  apps: Array<App>
};

class AppList extends React.PureComponent {
  props: Props;

  _keyExtractor = (item: App, index: number) => item.id.label;

  _onPressItem = (app: App) => console.log(app);

  _renderItem = ({ item, index }) =>
    <AppListItem
      id={item.id.label}
      app={item}
      index={index}
      onPressItem={this._onPressItem}
    />;

  render() {
    return (
      <FlatList
        style={styles.list}
        removeClippedSubviews={false}
        data={this.props.apps}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width
  }
})

module.exports = AppList;
