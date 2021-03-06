import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../Reducers/index';
import watcher from '../Sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(watcher);

export default store;