/**
 * @flow
 * @providesModule AppListItem
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';
import type { App, AppImage } from '../../reducers/apps';

type Props = {
  app: App,
  index: number,
  onPressItem: (app: App) => void
};

class AppListItem extends React.PureComponent {
  props: Props;

  _onPress = (app: App) => this.props.onPressItem(app);

  render() {
    const image = this.props.app['im:image'].find(
      (image: AppImage) => image.attributes.height >= 100
    );
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.cell}>
          <Text style={styles.indexText}>
            {this.props.index + 1}
          </Text>
          <Image
            style={styles.appIcon}
            source={image ? { uri: '' } : null}
          />
          <Text style={styles.appNameText} numberOfLines={2}>
            {this.props.app['im:name'].label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center'
  },
  indexText: {
    color: 'gray',
    fontSize: 18,
    width: 30,
    marginLeft: 4,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '200'
  },
  appIcon: {
    width: 50,
    height: 50,
    marginLeft: 5,
    justifyContent: 'center',
  },
  appNameText: {
    marginLeft: 4,
    flex: 1,
  }
});

module.exports = AppListItem;
