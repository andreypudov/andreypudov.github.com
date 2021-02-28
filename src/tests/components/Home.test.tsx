import { MemoryRouter } from 'react-router-dom'
import Component from './../../components/Home';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Component />
      </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});