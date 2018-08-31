import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './user';
import sessionReducer from './session';
import imageSignUpReducer from './imageSignUp';
import imageGalleryReducer from './imageGallery';
import publicationsReducer from './publicationsReducer';

const reducers = combineReducers({
	sessionReducer,
	userReducer,
	imageSignUpReducer,
	imageGalleryReducer,
	publicationsReducer,
	form
});

export default reducers;
