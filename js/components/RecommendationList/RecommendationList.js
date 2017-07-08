/**
 * @flow
 * @providesModule RecommendationList
 */

import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';
import type { App } from '../../reducers/apps';
import RecommendationListItem from 'RecommendationListItem';
import EmptyList from 'EmptyList';

type Props = {
  recommendations: ?Array<App>
};

type State = {
  limit: number
};

class RecommendationList extends React.PureComponent {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      limit: 10
    };
  }

  _keyExtractor = (item: App, index: number) => item.id.label;

  _onPressItem = (app: App) => console.log(app);

  _renderItem = ({ item, index }) =>
    <RecommendationListItem
      id={item.id.label}
      app={item}
      index={index}
      onPressItem={this._onPressItem}
    />;

  _renderEmptyList = () => <EmptyList isLoading={this.props.recommendations === null}/>;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Recommendations
        </Text>
        <FlatList
          ListEmptyComponent={this._renderEmptyList}
          horizontal={true}
          style={styles.list}
          initialNumToRender={10}
          data={
            this.props.recommendations
          }
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  list: {
    height: 160
  },
  titleText: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '400',
  }
});

module.exports = RecommendationList;
