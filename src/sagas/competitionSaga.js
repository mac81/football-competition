import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as CompetitionActions from '../actions/competitionActions';
import {getLatestSeasonsApi, getSeasonFixturesApi, getSeasonStagesApi} from '../api/competition';

function* competition() {
  yield takeLatest(types.LOAD_LATEST_SEASONS, loadLatestSeasonsSaga);
  yield takeLatest(types.LOAD_FIXTURES, loadFixturesSaga);
  yield takeLatest(types.LOAD_STAGES, loadStagesSaga);
}

function* loadLatestSeasonsSaga() {
  yield put(CompetitionActions.loadLatestSeasonsRequest());
  try {
    const seasons = yield call(getLatestSeasonsApi);
    yield put(CompetitionActions.loadLatestSeasonsSuccess(seasons));
  } catch (error) {
    yield put(CompetitionActions.loadLatestSeasonsFailure(error));
  }
}

function* loadFixturesSaga({payload: competitionId}) {
  yield put(CompetitionActions.loadFixturesRequest());
  try {
    const fixtures = yield call(getSeasonFixturesApi, competitionId);
    yield put(CompetitionActions.loadFixturesSuccess(fixtures));
  } catch (error) {
    yield put(CompetitionActions.loadFixturesFailure(error));
  }
}

function* loadStagesSaga({payload: competitionId}) {
  yield put(CompetitionActions.loadStagesRequest());
  try {
    const stages = yield call(getSeasonStagesApi, competitionId);
    yield put(CompetitionActions.loadStagesSuccess(stages));
  } catch (error) {
    yield put(CompetitionActions.loadStagesFailure(error));
  }
}

export default competition;
