/**
 * @flow
 * @providesModule RecommendationListItem
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

class RecomendationListItem extends React.PureComponent {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      image: null
    };
  }

  _onPress = () => this.props.onPressItem(this.props.app);

  render() {
    const image: ?AppImage = this.props.app['im:image'].find(
      (image: AppImage) => image.attributes.height >= 100
    );

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.cell}>
          <Image
            style={styles.appIcon}
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
    width: 100,
    alignItems: 'center'
  },
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  appCategoryText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  appNameText: {
    fontSize: 12
  },
  appInfo: {
    flex: 1,
    width: 80,
    marginTop: 4,
  }
});

module.exports = RecomendationListItem;
