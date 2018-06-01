import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECTORS} from '../reducers';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Groups from './Groups';
import Fixtures from './Fixtures';

class Competition extends React.Component {
  render() {
    const {match} = this.props;

    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/standing`}>Standing</Link>
          </li>
          <li>
            <Link to={`${match.url}/fixtures`}>Fixtures</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`/competition/:id/standing`} render={() => <Groups />} />
          <Route path={`/competition/:id/fixtures`} render={() => <Fixtures />} />
        </Switch>
      </div>
    );
  }
}

export default Competition;
