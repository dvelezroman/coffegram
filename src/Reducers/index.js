import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './user';
import sessionReducer from './session';
import imageSignUpReducer from './imageSignUp';
import imageGalleryReducer from './imageGallery';
import publicationsReducer from './publicationsReducer';
import authorsReducer from './authorsReducer';
import publishStateReducer from './publishStateReducer';

const reducers = combineReducers({
	sessionReducer,
	userReducer,
	imageSignUpReducer,
	imageGalleryReducer,
	publicationsReducer,
	authorsReducer,
	publishStateReducer,
	form
});

export default reducers;
