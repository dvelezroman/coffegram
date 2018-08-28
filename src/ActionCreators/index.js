import { LOGGED_USER, UNLOGGED_USER, NEW_USER_REGISTER, SIGNIN_USER, START_SESSION, CLOSE_SESSION } from '../ActionTypes/index';

export const loggedUser = user => ({ type: LOGGED_USER, payload: user });

export const newUserRegister = values => ({ type: NEW_USER_REGISTER, payload: values });

export const userSignIn = values => ({ type: SIGNIN_USER, payload: values });

export const startSession = values => ({ type: START_SESSION, payload: values });

export const closeSession = () => ({ type: CLOSE_SESSION });

export const userSignOut = () => ({ type: UNLOGGED_USER });