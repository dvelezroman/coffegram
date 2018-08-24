import { combineReducers } from 'redux';
import userReducer from './user';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
	userReducer,
	form
});

export default reducers;