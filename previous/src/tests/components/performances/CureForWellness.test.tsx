import { MemoryRouter } from 'react-router-dom'
import PerformanceAlbum from './../../../components/shared/PerformanceAlbum';
import Album from './../../../models/performances/cureForWellness';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

it('renders correctly', () => {
  const { asFragment } = render(
    <HelmetProvider>
      <MemoryRouter>
        <PerformanceAlbum album = { Album } />
      </MemoryRouter>
    </HelmetProvider>
    );

  expect(asFragment()).toMatchSnapshot();
})