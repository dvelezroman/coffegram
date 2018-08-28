import { 
  LOGGED_USER,
  UNLOGGED_USER,
  NEW_USER_REGISTER,
  SIGNIN_USER,
  START_SESSION,
  CLOSE_SESSION,
  LOAD_IMAGE,
  CLEAR_IMAGE
} from '../ActionTypes/index';

export const loggedUser = user => ({ type: LOGGED_USER, payload: user });

export const newUserRegister = values => ({ type: NEW_USER_REGISTER, payload: values });

export const userSignIn = values => ({ type: SIGNIN_USER, payload: values });

export const startSession = values => ({ type: START_SESSION, payload: values });

export const closeSession = () => ({ type: CLOSE_SESSION });

export const userSignOut = () => ({ type: UNLOGGED_USER });

export const loadSignUpImage = values => ({ type: LOAD_IMAGE, payload: values });

export const clearSignUpImage = () => ({ type: CLEAR_IMAGE });