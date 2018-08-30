import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './user';
import sessionReducer from './session';
import imageSignUpReducer from './imageSignUp';

const reducers = combineReducers({
	sessionReducer,
	userReducer,
	imageSignUpReducer,
	form
});

export default reducers;
