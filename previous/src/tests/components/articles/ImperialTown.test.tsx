import { MemoryRouter } from 'react-router-dom'
import Component from './../../../components/articles/ImperialTown';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

it('renders correctly', () => {
  const { asFragment } = render(
    <HelmetProvider>
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    </HelmetProvider>
    );

  expect(asFragment()).toMatchSnapshot();
})