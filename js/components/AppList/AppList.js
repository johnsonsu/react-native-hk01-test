/**
 * @flow
 * @providesModule AppList
 */

import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  LayoutAnimation,
  ActivityIndicator
} from 'react-native';
import type { App } from '../../reducers/apps';
import AppListItem from 'AppListItem';
import RecommendationList from 'RecommendationList';
import EmptyList from 'EmptyList';

type Props = {
  apps: ?Array<App>,
  recommendations: ?Array<App>
};

type State = {
  limit: number
};

class AppList extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      limit: 10
    };
  }

  _itemSeparatorComponent = () => <View style={styles.separator} />;

  _keyExtractor = (item: App, index: number) => item.id.label;

  _onPressItem = (app: App) => console.log(app);

  _renderItem = ({ item, index }) =>
    <AppListItem
      id={item.id.label}
      app={item}
      index={index}
      onPressItem={this._onPressItem}
    />;

  _onEndReached = ({ distanceFromEnd: number }) => {
    if (this.state.limit < 100) {
      LayoutAnimation.easeInEaseOut();
      this.setState({ limit: this.state.limit + 10 });
    }
  };

  _renderHeader = () => <RecommendationList recommendations={this.props.recommendations} />;

  _renderEmptyList = () => <EmptyList />;

  render() {
    return (
      <FlatList
        ListEmptyComponent={this._renderEmptyList}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._itemSeparatorComponent}
        style={styles.list}
        initialNumToRender={10}
        data={this.props.apps ? this.props.apps.slice(0, this.state.limit) : []}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.2}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray'
  }
});

module.exports = AppList;
