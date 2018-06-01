import createReducer from '../utils/createReducer';
import * as types from '../actionTypes';

const initialState = {
  predictions: [],
};

export default createReducer(initialState, {
  [types.GET_PREDICTIONS_SUCCESS]: (state, {payload: predictions}) => ({
    ...state,
    predictions,
  }),
});

export const SELECTORS = {
  getPredictions: state => state.predictions,
};
