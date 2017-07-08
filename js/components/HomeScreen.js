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
import type { App } from '../reducers/apps';
import type { State as Recommendations } from '../reducers/recommendations';

type Props = {
  navigation: Object,
  apps: Apps,
  recommendations: Recommendations,
  fetchApps: () => void,
  fetchRecommendations: () => void
};

type State = {
  searchText: string,
  filteredApps: Array<App>,
  filteredRecommendations: Array<App>
};

export class HomeScreen extends React.PureComponent {
  props: Props;
  state: State;

  static navigationOptions = {
    title: 'AppStore'
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      searchText: '',
      filteredApps: [],
      filteredRecommendations: []
    };
  }

  componentDidMount() {
    this.props.fetchApps();
    this.props.fetchRecommendations();
  }

  _onChangeText = (text: string) => {
    this.setState({
      searchText: text,
      filteredApps: this.props.apps.apps
        ? this._searchAppForText(this.props.apps.apps, text)
        : [],
      filteredRecommendations: this.props.recommendations.recommendations
        ? this._searchAppForText(
            this.props.recommendations.recommendations,
            text
          )
        : []
    });
  };

  _onRefresh = () => {
    this.props.fetchApps();
    this.props.fetchRecommendations();
  };

  _searchAppForText(apps: Array<App>, text: string): Array<App> {
    return apps.filter(app => {
      return (
        app['im:name'].label.includes(text) ||
        app.category.attributes.label.includes(text) ||
        app.summary.label.includes(text) ||
        app['im:artist'].label.includes(text)
      );
    });
  }

  _navigateToAppScreen = (app: App) => {
    const { navigate } = this.props.navigation;
    navigate && navigate('App', { app });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this._onChangeText} />
        <AppList
          apps={
            this.state.searchText
              ? this.state.filteredApps
              : this.props.apps.apps
          }
          recommendations={
            this.state.searchText
              ? this.state.filteredRecommendations
              : this.props.recommendations.recommendations
          }
          onItemPress={this._navigateToAppScreen}
          onRefresh={this._onRefresh}
          refreshing={
            this.props.apps.apps !== null && this.props.apps.isLoading
          }
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
