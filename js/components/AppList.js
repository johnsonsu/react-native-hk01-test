/**
 * @flow
 * @providesModule AppList
 */

import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import type { App } from '../reducers/apps';

type Props = {
  apps: Array<App>
}

class AppList extends React.PureComponent {
  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor(item, index){
    return item.id;
  }

  _onPressItem(id: string) {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  }

  _renderItem({ item }) {
    return (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return <TouchableOpacity {...this.props} onPress={this._onPress} />;
  }
}
