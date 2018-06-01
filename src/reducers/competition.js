import createReducer from '../utils/createReducer';
import * as types from '../actionTypes';

const initialState = {
  seasons: [],
  fixtures: [],
  stages: [],
};

export default createReducer(initialState, {
  // [types.LOAD_SEASONS_SUCCESS]: (state, {payload: seasons}) => ({
  //   ...state,
  //   seasons,
  // }),
  [types.LOAD_LATEST_SEASONS_SUCCESS]: (state, {payload: seasons}) => ({
    ...state,
    seasons,
  }),
  [types.LOAD_FIXTURES_SUCCESS]: (state, {payload: fixtures}) => ({
    ...state,
    fixtures,
  }),
  [types.LOAD_STAGES_SUCCESS]: (state, {payload: stages}) => ({
    ...state,
    stages,
  }),
});

export const SELECTORS = {
  getSeasons: state => state.seasons,
  getFixtures: state => state.fixtures,
  getStages: state => state.stages,
  getGroups: state => state.stages.filter(stage => stage.standing),
};
