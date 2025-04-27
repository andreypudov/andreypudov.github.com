import { MemoryRouter } from 'react-router-dom'
import PhotographyAlbum from './../../../components/shared/PhotographyAlbum';
import Album from './../../../models/photographs/peipeiRain';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

it('renders correctly', () => {
  const { asFragment } = render(
    <HelmetProvider>
      <MemoryRouter>
        <PhotographyAlbum album={Album} />
      </MemoryRouter>
    </HelmetProvider>
    );

  expect(asFragment()).toMatchSnapshot();
})