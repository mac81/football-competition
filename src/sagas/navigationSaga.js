import {put, takeLatest, fork} from 'redux-saga/effects';
import * as types from '../actionTypes';
import {matchPath} from 'react-router-dom';
import * as competitionActions from '../actions/competitionActions';
import * as userActions from '../actions/userActions';

function* navigation() {
  yield takeLatest(types.LOCATION_CHANGE, routeChangeSaga);
}

function* routeChange(pathname) {
  const competitionsMatch = matchPath(pathname, {
    path: `/competitions`,
    exact: true,
  });
  if (competitionsMatch) {
    yield put(competitionActions.loadLatestSeasons());
    return;
  }

  const competitionMatch = matchPath(pathname, {
    path: `/competition/:id`,
    exact: false,
  });
  if (competitionMatch) {
    yield put(competitionActions.loadStages(competitionMatch.params.id));
    yield put(competitionActions.loadFixtures(competitionMatch.params.id));
    yield put(userActions.getPredictions());
    return;
  }

  // const fixturesMatch = matchPath(pathname, {
  //   path: `/competition/:id/fixtures`,
  //   exact: true,
  // });
  // if (fixturesMatch) {
  //   yield put(competitionActions.loadFixtures());
  //   return;
  // }

  // const standingMatch = matchPath(pathname, {
  //   path: `/standing`,
  //   exact: true,
  // });
  // if (standingMatch) {
  //   yield put(standingActions.loadStanding());
  //   return;
  // }

  // const seasonsMatch = matchPath(pathname, {
  //   path: `/seasons`,
  //   exact: true,
  // });
  // if (seasonsMatch) {
  //   yield put(seasonActions.loadSeasons());
  //   return;
  // }

  // const stagesMatch = matchPath(pathname, {
  //   path: `/competition/groups`,
  //   exact: true,
  // });
  // if (stagesMatch) {
  //   yield put(stagesActions.loadStages());
  //   return;
  // }
}

function* routeChangeSaga({payload: {pathname}}) {
  yield fork(routeChange, pathname);
}

export default navigation;
