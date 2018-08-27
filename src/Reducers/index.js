import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './user';
import sessionReducer from './session';

const reducers = combineReducers({
	sessionReducer,
	userReducer,
	form
});

export default reducers;
