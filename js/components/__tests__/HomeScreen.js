import React from 'react';
import { HomeScreen } from '../HomeScreen';
import renderer from 'react-test-renderer';

const fetchApps = jest.fn();
const fetchRecommendations = jest.fn();
const apps = {
  isLoading: false,
  apps: []
};
const recommendations = {
  isLoading: false,
  recommendations: []
};

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <HomeScreen
        apps={apps}
        recommendations={recommendations}
        fetchApps={fetchApps}
        fetchRecommendations={fetchRecommendations}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
