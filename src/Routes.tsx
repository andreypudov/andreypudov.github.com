import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contents from './components/Contents';
import Resume from './components/Resume';
import Contact from './components/Contact';

function Routes() {
  return (
    <Switch>
      <Route exact path = '/' component = { Home } />
      <Route exact path = '/contents' component = { Contents } />
      <Route exact path = '/resume' component = { Resume } />
      <Route exact path = '/contact' component = { Contact } />
    </Switch>
  );
}

export default Routes;