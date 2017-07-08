import React from 'react';
import AppList from '../AppList';
import renderer from 'react-test-renderer';

const apps = [];
const recommendations = [];

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <AppList
        apps={apps}
        recommendations={recommendations}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
