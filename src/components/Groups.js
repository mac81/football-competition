import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECTORS} from '../reducers';
import Standing from './Standing';
import Fixtures from './Fixtures';
import Flag from '../icons/flags/Flag';

class Groups extends React.Component {
  render() {
    const {groups} = this.props;

    if (!groups) return null;

    return (
      <div>
        {groups.map(group => (
          <div key={group._id}>
            <h2>{group.name}</h2>
            <Standing standing={group.standing} />
            {/* <Fixtures fixtures={group.fixtures} /> */}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: SELECTORS.COMPETITION.getGroups(state),
});

export default connect(mapStateToProps)(Groups);
