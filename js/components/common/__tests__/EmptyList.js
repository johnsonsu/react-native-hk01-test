import React from 'react';
import EmptyList from '../EmptyList';
import renderer from 'react-test-renderer';

it('renders loading screen without crashing', () => {
  const rendered = renderer
    .create(
      <EmptyList
        isLoading={true}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});

it('renders no result screen without crashing', () => {
  const rendered = renderer
    .create(
      <EmptyList
        isLoading={false}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
