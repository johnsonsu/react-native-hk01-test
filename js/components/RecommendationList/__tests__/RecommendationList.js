import React from 'react';
import RecommendationList from '../RecommendationList';
import renderer from 'react-test-renderer';

const recommendations = {
  isLoading: false,
  recommendations: []
};

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <RecommendationList
        recommendations={recommendations}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
