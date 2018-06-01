import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store, history} from './store';
import {Route, Switch, Link} from 'react-router-dom';
//import {ConnectedRouter} from 'connected-react-router';
import {ConnectedRouter} from 'react-router-redux';
import {APP_INIT} from './actionTypes';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

import Fixtures from './components/Fixtures';
import Groups from './components/Groups';
import Login from './components/Login';
import Register from './components/Register';

const competitionId = 296;

class App extends Component {
  constructor(...args) {
    super(...args);
    store.dispatch({type: APP_INIT, payload: {location: history.location}});
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <div>
              <nav className="nav-main">
                <ul className="container">
                  <li>
                    <Link to={`/competition/${competitionId}/fixtures`}>Fixtures</Link>
                  </li>
                  <li>
                    <Link to={`/competition/${competitionId}/standing`}>Standing</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </nav>
              <div className="container">
                <Switch>
                  <Route exact path={`/`} render={() => <div>Homepage</div>} />
                  <Route exact path={`/login`} component={Login} />
                  <Route exact path={`/register`} component={Register} />
                  <Route path={`/competition/:id/fixtures`} component={Fixtures} />
                  <Route path={`/competition/:id/standing`} component={Groups} />
                </Switch>
              </div>
            </div>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
