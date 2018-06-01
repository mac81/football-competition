import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import competition, {SELECTORS as COMPETITION_SELECTORS} from './competition';
import user, {SELECTORS as USER_SELECTORS} from './user';

const rootReducer = combineReducers({
  competition,
  user,
  routerReducer,
});

const bindSelectors = (stateSelector, selectors) => {
  const boundSelectors = {};
  Object.keys(selectors).forEach(key => {
    const selector = selectors[key];
    boundSelectors[key] = (state, ...rest) => selector(stateSelector(state), ...rest);
  });
  return boundSelectors;
};

export const ROUTER_SELECTORS = {
  getPathname: state => state.location.pathname,
};

export const SELECTORS = {
  COMPETITION: bindSelectors(state => state.competition, COMPETITION_SELECTORS),
  USER: bindSelectors(state => state.user, USER_SELECTORS),
  ROUTER: bindSelectors(state => state.routerReducer, ROUTER_SELECTORS),
};

export default rootReducer;
