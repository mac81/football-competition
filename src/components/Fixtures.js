import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECTORS} from '../reducers';
import styled from 'styled-components';
import Flag from '../icons/flags/Flag';
import {font, color} from '../styles/typography';
import moment from 'moment';
import * as userActions from '../actions/userActions';

const StyledFixtures = styled.div`
  ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
  }

  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
  }

  .team-name {
    ${font('subtitle1')};
    margin-top: 15px;
  }

  .stage-name {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }

  .schedule {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    ${font('overline')};
  }

  .score-input-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .score-input {
    padding: 2px 10px;
    width: 50px;
    ${font('body1')};
    text-align: center;

    &:focus {
      border: 2px solid green;
      outline: none;
    }
  }

  .score-divider {
    ${font('subtitle1')};
  }

  .stadium {
    display: block;
    text-align: center;
    ${font('caption')};
  }

  .correct {
    color: green;
  }

  .not-correct {
    color: red;
  }
`;

class Fixtures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: {},
    };
  }

  onUpdatePrediction = (matchId, e) => {
    const prediction = e.target.value;
    const name = e.target.name;

    this.setState(
      {
        predictions: {
          [matchId]: {
            ...this.state.predictions[matchId],
            [name]: prediction,
          },
        },
      },
      () => {
        const homeScorePrediction = this.state.predictions[matchId].homeScorePrediction;
        const awayScorePrediction = this.state.predictions[matchId].awayScorePrediction;
        this.props.userActions.setPrediction(matchId, homeScorePrediction, awayScorePrediction);
      }
    );
  };

  isCorrectScore = (fixture, prediction) => {
    if (!prediction) return;

    if (
      fixture.number_goal_team_home === Number(prediction.homeScore) &&
      fixture.number_goal_team_away === Number(prediction.awayScore)
    ) {
      return 'correct';
    }
    return 'not-correct';
  };

  render() {
    const {fixtures, stages, predictions} = this.props;

    if (!fixtures) return null;

    return (
      <StyledFixtures>
        <h2>Fixtures</h2>
        <ul>
          {fixtures.map(fixture => {
            const prediction = predictions.find(prediction => Number(prediction.matchId) === fixture._id);
            return (
              <li key={fixture._id}>
                <div className="team home-team">
                  <Flag id={fixture.id_team_season_home} />
                  <span className="team-name home-team-name">{fixture.team_season_home_name}</span>
                </div>
                <div className="fixture-info">
                  {fixture.fixture_status_short === 'NS' ? (
                    <div>
                      <span className="stage-name">{stages.find(stage => stage._id === fixture.id_stage).name}</span>
                      <span className="schedule">{moment(fixture.schedule_date).format('dddd, MMMM Do, HH:mm')}</span>
                      <div className="score-input-wrapper">
                        <input
                          type="text"
                          maxLength="2"
                          className="score-input"
                          name="homeScorePrediction"
                          defaultValue={prediction && prediction.homeScorePrediction}
                          onChange={e => this.onUpdatePrediction(fixture._id, e)}
                        />
                        <span className="score-divider">-</span>
                        <input
                          type="text"
                          maxLength="2"
                          className="score-input"
                          name="awayScorePrediction"
                          defaultValue={prediction && prediction.awayScorePrediction}
                          onChange={e => this.onUpdatePrediction(fixture._id, e)}
                        />
                      </div>
                      {/* <span className="stadium">{fixture.stadium}</span> */}
                    </div>
                  ) : (
                    <div className={this.isCorrectScore(fixture, prediction)}>
                      Actual result
                      {fixture.number_goal_team_home}-{fixture.number_goal_team_away}
                      user prediction
                      {prediction && prediction.homeScore}-{prediction && prediction.awayScore}
                    </div>
                  )}
                </div>
                <div className="team away-team">
                  <Flag id={fixture.id_team_season_away} />
                  <span className="team-name away-team-name">{fixture.team_season_away_name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </StyledFixtures>
    );
  }
}

const mapStateToProps = state => ({
  fixtures: SELECTORS.COMPETITION.getFixtures(state),
  stages: SELECTORS.COMPETITION.getStages(state),
  predictions: SELECTORS.USER.getPredictions(state),
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
