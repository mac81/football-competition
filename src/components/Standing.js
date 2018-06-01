import React from 'react';
import styled from 'styled-components';
import Flag from '../icons/flags/Flag';
import {font} from '../styles/typography';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 20px 20px;
    text-align: center;
    line-height: 1rem;
    ${font('body2')};

    &.align-left {
      text-align: left;
    }
  }

  td {
    border-top: 1px solid #dfdfdf;
  }

  .test {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      margin-top: 1px;
    }
  }
`;

class Standing extends React.Component {
  render() {
    const {standing} = this.props;

    if (!standing) return null;

    return (
      <Table>
        <thead>
          <tr>
            <th>Position</th>
            <th className="align-left">Nation</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standing.map(team => (
            <tr key={team._id}>
              <td>{team.position}</td>
              <td className="align-left">
                <div className="test">
                  <Flag id={team.id_team_season} />
                  {team.team_season_name}
                </div>
              </td>
              <td>{team.p}</td>
              <td>{team.w_tot}</td>
              <td>{team.d_tot}</td>
              <td>{team.l_tot}</td>
              <td>{team.gf_tot > team.ga_tot ? `+${team.gf_tot - team.ga_tot}` : `-${team.ga_tot - team.gf_tot}`}</td>
              <td>{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Standing;
