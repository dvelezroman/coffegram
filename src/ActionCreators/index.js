import { 
  LOGGED_USER,
  UNLOGGED_USER,
  NEW_USER_REGISTER,
  SIGNIN_USER,
  START_SESSION,
  CLOSE_SESSION,
  LOAD_IMAGE,
  CLEAR_IMAGE,
  LOAD_IMAGE_TO_UPLOAD,
  UNLOAD_IMAGE_TO_UPLOAD,
  PUBLISH_IMAGE,
  GET_PUBLICATIONS,
} from '../ActionTypes/index';

// stores the data user
export const loggedUser = user => ({ type: LOGGED_USER, payload: user });
// creates a new user
export const newUserRegister = values => ({ type: NEW_USER_REGISTER, payload: values });
// loggin a user
export const userSignIn = values => ({ type: SIGNIN_USER, payload: values });
// starts a session for a logged user
export const startSession = values => ({ type: START_SESSION, payload: values });
// closes session from a user
export const closeSession = () => ({ type: CLOSE_SESSION });
// logout a user
export const userSignOut = () => ({ type: UNLOGGED_USER });
// load an image for a new user signUp
export const loadSignUpImage = values => ({ type: LOAD_IMAGE, payload: values });
// unload an image from the signUp component when unloaded
export const clearSignUpImage = () => ({ type: CLEAR_IMAGE });
// load an image to upload at gallery
export const loadImageFromGallery = values => ({ type: LOAD_IMAGE_TO_UPLOAD, payload: values });
// unload an image from the store when it have been uploaded or component unmounted
export const unloadImageFromGallery = () => ({ type: UNLOAD_IMAGE_TO_UPLOAD });
// publish and storage an image selected
export const publishImage = values => ({ type: PUBLISH_IMAGE, payload: values });
// get all the publications from a user
export const getPublications = () => ({ type: GET_PUBLICATIONS });
