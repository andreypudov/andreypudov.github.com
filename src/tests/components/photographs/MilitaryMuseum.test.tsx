import { MemoryRouter } from 'react-router-dom'
import PhotographyAlbum from './../../../components/shared/PhotographyAlbum';
import Album from './../../../models/photographs/militaryMuseum';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HelmetProvider>
        <MemoryRouter>
          <PhotographyAlbum album={Album} />
        </MemoryRouter>
      </HelmetProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});