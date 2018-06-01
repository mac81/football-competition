import * as types from '../actionTypes';

/**********
## LOGIN ##
**********/

export const userLogin = (username, password) => ({
  type: types.USER_LOGIN,
  payload: {username, password},
});

export const userLoginRequest = () => ({
  type: types.USER_LOGIN_REQUEST,
});

export const userLoginSuccess = user => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: {user},
});

export const userLoginFailure = error => ({
  type: types.USER_LOGIN_FAILURE,
  payload: {error},
});

/*************
## REGISTER ##
*************/

export const userRegister = (username, password) => ({
  type: types.USER_REGISTER,
  payload: {username, password},
});

export const userRegisterRequest = () => ({
  type: types.USER_REGISTER_REQUEST,
});

export const userRegisterSuccess = user => ({
  type: types.USER_REGISTER_SUCCESS,
  payload: {user},
});

export const userRegisterFailure = error => ({
  type: types.USER_REGISTER_FAILURE,
  payload: {error},
});

/***************
## PREDICTION ##
***************/

export const setPrediction = (matchId, homeScorePrediction, awayScorePrediction) => ({
  type: types.SET_PREDICTION,
  payload: {matchId, homeScorePrediction, awayScorePrediction},
});

export const setPredictionRequest = () => ({
  type: types.SET_PREDICTION_REQUEST,
});

export const setPredictionSuccess = prediction => ({
  type: types.SET_PREDICTION_SUCCESS,
  payload: {prediction},
});

export const setPredictionFailure = error => ({
  type: types.SET_PREDICTION_FAILURE,
  payload: {error},
});

export const getPredictions = () => ({
  type: types.GET_PREDICTIONS,
});

export const getPredictionsRequest = () => ({
  type: types.GET_PREDICTIONS_REQUEST,
});

export const getPredictionsSuccess = predictions => ({
  type: types.GET_PREDICTIONS_SUCCESS,
  payload: predictions,
});

export const getPredictionsFailure = error => ({
  type: types.GET_PREDICTIONS_FAILURE,
  payload: {error},
});
