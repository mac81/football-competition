import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
//import {connectRouter, routerMiddleware} from 'connected-react-router';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from '../reducers';
import user from '../sagas/userSaga';
import navigation from '../sagas/navigationSaga';
import competition from '../sagas/competitionSaga';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

sagaMiddleware.run(user);
sagaMiddleware.run(navigation);
sagaMiddleware.run(competition);

export {store, history};
