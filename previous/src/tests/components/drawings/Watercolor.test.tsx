import { MemoryRouter } from 'react-router-dom'
import DrawingAlbum from './../../../components/shared/DrawingAlbum';
import Album from './../../../models/drawings/watercolor';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HelmetProvider>
        <MemoryRouter>
          <DrawingAlbum album={Album} />
        </MemoryRouter>
      </HelmetProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});