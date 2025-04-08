import { MemoryRouter } from 'react-router-dom'
import PerformanceAlbum from './../../../components/shared/PerformanceAlbum';
import Album from './../../../models/performances/cureForWellness';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HelmetProvider>
        <MemoryRouter>
          <PerformanceAlbum album = { Album } />
        </MemoryRouter>
      </HelmetProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});