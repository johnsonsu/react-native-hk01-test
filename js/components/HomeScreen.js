/**
 * @flow
 * @providesModule HomeScreen
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchApps } from '../actions/apps';
import AppList from 'AppList';

import type { App } from '../reducers/apps';


type Props = {
  isLoading: boolean,
  apps: Array<App>,
  fetchApps: () => void
};

class HomeScreen extends React.Component {
  props: Props;

  static navigationOptions = {
    title: 'AppStore'
  };

  componentDidMount() {
    this.props.fetchApps();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppList apps={this.props.apps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.apps.isLoading,
    apps: state.apps.apps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApps: () => {
      dispatch(fetchApps());
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
