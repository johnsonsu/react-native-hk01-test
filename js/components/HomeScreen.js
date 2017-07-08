/**
 * @flow
 * @providesModule HomeScreen
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchApps } from '../actions/apps';
import { fetchRecommendations } from '../actions/recommendations';
import AppList from 'AppList';
import SearchBar from 'SearchBar';

import type { State as Apps } from '../reducers/apps';
import type { State as Recommendations } from '../reducers/recommendations';

type Props = {
  apps: Apps,
  recommendations: Recommendations,
  fetchApps: () => void,
  fetchRecommendations: () => void
};

export class HomeScreen extends React.PureComponent {
  props: Props;

  static navigationOptions = {
    title: 'AppStore'
  };

  componentDidMount() {
    this.props.fetchApps();
    this.props.fetchRecommendations();
  }

  onChangeText(text: string) {

  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <AppList
          apps={this.props.apps.apps}
          recommendations={this.props.recommendations.recommendations}
        />
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
    apps: state.apps,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApps: () => {
      dispatch(fetchApps());
    },
    fetchRecommendations: () => {
      dispatch(fetchRecommendations());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
