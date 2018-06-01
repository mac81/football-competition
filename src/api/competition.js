import fetch from '../utils/fetch';

export const getSeasonsApi = query =>
  fetch(`http://localhost:3003/api/season/296`, {
    method: 'GET',
  }).then(json => json.payload);

export const getLatestSeasonsApi = () =>
  fetch(`http://localhost:3003/api/seasons/latest`, {
    method: 'GET',
  }).then(json => json.payload);

export const getSeasonStagesApi = seasonId =>
  fetch(`http://localhost:3003/api/seasons/${seasonId}/stages`, {
    method: 'GET',
  }).then(json => json.payload);

export const getSeasonFixturesApi = seasonId =>
  fetch(`http://localhost:3003/api/seasons/${seasonId}/fixtures`, {
    method: 'GET',
  }).then(json => json.payload);
