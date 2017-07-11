/**
 * @flow
 * @providesModule AppScreen
 */

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import type { App, AppImage } from '../reducers/apps';

type Props = {
  navigation: Object
};

class AppScreen extends React.Component {
  props: Props;

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.app['im:name'].label
  });

  render() {
    const app: App = this.props.navigation.state.params.app;
    const image: ?AppImage = app['im:image'].find(
      (image: AppImage) => image.attributes.height >= 100
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.appIcon}
            source={image ? { uri: image.label } : null}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.appName}>
              {app['im:name'].label}
            </Text>
            <Text style={styles.authorName}>
              {app['im:artist'].label}
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          >
          <Text style={styles.sectionHeaderText}>Description</Text>
          <Text style={styles.descriptionText}>{app.summary.label}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5
  },
  appIcon: {
    width: 100,
    height: 100,
    borderRadius: 20
  },
  headerInfo: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  },
  appName: {
    color: 'black',
    fontSize: 18
  },
  authorName: {
    color: 'black',
    paddingTop: 2,
    fontSize: 12
  },
  contentContainerStyle: {
    padding: 10
  },
  sectionHeaderText: {
    color: 'black',
    fontSize: 16,
    paddingVertical: 8,
  },
  descriptionText: {
    fontSize: 12,
    color: 'gray'
  }
});

export default AppScreen;
