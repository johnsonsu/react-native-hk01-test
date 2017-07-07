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

type State = {
  image: ?string
};

class AppListItem extends React.PureComponent {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      image: null
    };
  }

  _onPress = (app: App) => this.props.onPressItem(app);

  render() {
    const image: ?AppImage = this.props.app['im:image'].find(
      (image: AppImage) => image.attributes.height >= 100
    );

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.cell}>
          <Text style={styles.indexText}>
            {this.props.index + 1}
          </Text>
          <Image
            style={[
              styles.appIcon,
              this.props.index % 2 !== 0 ? styles.circle : styles.round
            ]}
            source={image ? { uri: image.label } : null}
          />
          <View style={styles.appInfo}>
            <Text style={styles.appNameText} numberOfLines={2}>
              {this.props.app['im:name'].label}
            </Text>
            <Text style={styles.appCategoryText}>
              {this.props.app.category.attributes.label}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center'
  },
  indexText: {
    color: 'gray',
    fontSize: 20,
    width: 30,
    marginLeft: 4,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '300'
  },
  appIcon: {
    width: 50,
    height: 50,
    marginLeft: 5,
    justifyContent: 'center'
  },
  round: {
    borderRadius: 10
  },
  circle: {
    borderRadius: 25
  },
  appNameText: {},
  appCategoryText: {
    color: 'gray'
  },
  appInfo: {
    flex: 1,
    marginLeft: 10,
    marginRight: 30,
  }
});

module.exports = AppListItem;
