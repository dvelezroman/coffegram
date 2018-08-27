import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../Reducers/index';
import watcher from '../Sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcher);

export default store;