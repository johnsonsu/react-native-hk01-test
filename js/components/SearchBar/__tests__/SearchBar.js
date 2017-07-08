import React from 'react';
import SearchBar from '../SearchBar';
import renderer from 'react-test-renderer';

const onChangeText = jest.fn();

it('renders without crashing', () => {
  const rendered = renderer.create(<SearchBar onChangeText={onChangeText} />).toJSON();
  expect(rendered).toBeTruthy();
});
