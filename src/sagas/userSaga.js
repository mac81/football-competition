import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as UserActions from '../actions/userActions';
import {userLoginApi, userRegisterApi, setPredictionApi, getPredictionsApi} from '../api/user';

function* user() {
  yield takeLatest(types.USER_LOGIN, userLoginSaga);
  yield takeLatest(types.USER_REGISTER, userRegisterSaga);
  yield takeLatest(types.SET_PREDICTION, setPredictionSaga);
  yield takeLatest(types.GET_PREDICTIONS, getPredictionsSaga);
}

function* userLoginSaga({payload: {username, password}}) {
  yield call(userLogin, username, password);
}

function* userLogin(username, password) {
  yield put(UserActions.userLoginRequest());
  try {
    const user = yield call(userLoginApi, username, password);
    sessionStorage.setItem('token', user.token);
    yield put(UserActions.userLoginSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(UserActions.userLoginFailure(error));
  }
}

function* userRegisterSaga({payload: {username, password}}) {
  yield call(userRegister, username, password);
}

function* userRegister(username, password) {
  yield put(UserActions.userRegisterRequest());
  try {
    const user = yield call(userRegisterApi, username, password);
    sessionStorage.setItem('token', user.token);
    yield put(UserActions.userRegisterSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(UserActions.userRegisterFailure(error));
  }
}

function* setPredictionSaga({payload: {matchId, homeScorePrediction, awayScorePrediction}}) {
  yield call(setPrediction, matchId, homeScorePrediction, awayScorePrediction);
}

function* setPrediction(matchId, homeScorePrediction, awayScorePrediction) {
  yield put(UserActions.setPredictionRequest());
  try {
    const result = yield call(setPredictionApi, matchId, homeScorePrediction, awayScorePrediction);
    yield put(UserActions.setPredictionSuccess(result));
  } catch (error) {
    yield put(UserActions.setPredictionFailure(error));
  }
}

function* getPredictionsSaga() {
  yield put(UserActions.getPredictionsRequest());
  try {
    const predictions = yield call(getPredictionsApi);
    yield put(UserActions.getPredictionsSuccess(predictions));
  } catch (error) {
    yield put(UserActions.getPredictionsFailure(error));
  }
}

export default user;
