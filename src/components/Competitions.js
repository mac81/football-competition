import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECTORS} from '../reducers';
import {Link, Route} from 'react-router-dom';
import Groups from './Groups';

class Competitions extends React.Component {
  render() {
    const {seasons} = this.props;
    return (
      <div>
        <ul>
          {seasons.map(season => (
            <li>
              <Link to={`/competition/${season._id}`}>{season.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seasons: SELECTORS.COMPETITION.getSeasons(state),
});

export default connect(mapStateToProps)(Competitions);
