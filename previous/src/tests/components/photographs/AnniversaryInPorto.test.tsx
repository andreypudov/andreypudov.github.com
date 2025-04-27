import PhotographyAlbum from './../../../components/shared/PhotographyAlbum';
import Album from './../../../models/photographs/anniversaryInPorto';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

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