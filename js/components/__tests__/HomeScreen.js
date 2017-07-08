import React from 'react';
import { HomeScreen } from '../HomeScreen';
import renderer from 'react-test-renderer';

const fetchApps = jest.fn();

it('renders without crashing', () => {
  const rendered = renderer.create(<HomeScreen fetchApps={fetchApps} />).toJSON();
  expect(rendered).toBeTruthy();
});
