import * as types from '../actionTypes';

/* LATEST SEASONS */

export const loadLatestSeasons = () => ({
  type: types.LOAD_LATEST_SEASONS,
});

export const loadLatestSeasonsRequest = () => ({
  type: types.LOAD_LATEST_SEASONS_REQUEST,
});

export const loadLatestSeasonsSuccess = seasons => ({
  type: types.LOAD_LATEST_SEASONS_SUCCESS,
  payload: seasons,
});

export const loadLatestSeasonsFailure = () => ({
  type: types.LOAD_LATEST_SEASONS_FAILURE,
});

/* FIXTURES */

export const loadFixtures = competitionId => ({
  type: types.LOAD_FIXTURES,
  payload: competitionId,
});

export const loadFixturesRequest = () => ({
  type: types.LOAD_FIXTURES_REQUEST,
});

export const loadFixturesSuccess = fixtures => ({
  type: types.LOAD_FIXTURES_SUCCESS,
  payload: fixtures,
});

export const loadFixturesFailure = () => ({
  type: types.LOAD_FIXTURES_FAILURE,
});

/* STAGES */

export const loadStages = competitionId => ({
  type: types.LOAD_STAGES,
  payload: competitionId,
});

export const loadStagesRequest = () => ({
  type: types.LOAD_STAGES_REQUEST,
});

export const loadStagesSuccess = stages => ({
  type: types.LOAD_STAGES_SUCCESS,
  payload: stages,
});

export const loadStagesFailure = () => ({
  type: types.LOAD_STAGES_FAILURE,
});
