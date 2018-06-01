import fetch from '../utils/fetch';

export const userLoginApi = (username, password) => {
  return fetch(`http://localhost:3003/api/authentication/login`, {
    method: 'POST',
    body: JSON.stringify({email: username, password: password}),
  }).then(json => json.payload);
};

export const userRegisterApi = (username, password) => {
  return fetch(`http://localhost:3003/api/authentication/register`, {
    method: 'POST',
    body: JSON.stringify({email: username, password: password}),
  }).then(json => json.payload);
};

export const setPredictionApi = (matchId, homeScorePrediction, awayScorePrediction) => {
  return fetch(`http://localhost:3003/api/authentication/prediction`, {
    method: 'PUT',
    body: JSON.stringify({matchId, homeScorePrediction, awayScorePrediction}),
  }).then(json => json.payload);
};

export const getPredictionsApi = () => {
  return fetch(`http://localhost:3003/api/authentication/predictions`, {
    method: 'GET',
  }).then(json => json.payload);
};
