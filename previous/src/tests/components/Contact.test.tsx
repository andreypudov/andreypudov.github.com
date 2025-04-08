import { MemoryRouter } from 'react-router-dom'
import Component from './../../components/Contact';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HelmetProvider>
        <MemoryRouter>
          <Component />
        </MemoryRouter>
      </HelmetProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});