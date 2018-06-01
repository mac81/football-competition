import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECTORS} from '../reducers';
import {Link} from 'react-router-dom';

class Seasons extends React.Component {
  render() {
    const {seasons} = this.props;

    if (!seasons) return null;

    return <Link to="/competition">{seasons.map(season => <img src={season.logo} alt={season.name} />)}</Link>;
  }
}

const mapStateToProps = state => ({
  seasons: SELECTORS.SEASON.getSeasons(state),
});

export default connect(mapStateToProps)(Seasons);
