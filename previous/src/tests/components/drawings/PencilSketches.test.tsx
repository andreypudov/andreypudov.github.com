import { MemoryRouter } from 'react-router-dom'
import DrawingAlbum from './../../../components/shared/DrawingAlbum';
import Album from './../../../models/drawings/pencilSketches';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

it('renders correctly', () => {
  const { asFragment } = render(
    <HelmetProvider>
      <MemoryRouter>
        <DrawingAlbum album={Album} />
      </MemoryRouter>
    </HelmetProvider>
    );

  expect(asFragment()).toMatchSnapshot();
})