import { INCREMENTA_USER, NEW_USER_REGISTER, SIGNIN_USER } from '../ActionTypes/index';

export const incrementaUser = user => ({ type: INCREMENTA_USER, payload: user });

export const newUserRegister = values => ({ type: NEW_USER_REGISTER, payload: values });

export const userSignIn = values => ({ type: SIGNIN_USER, payload: values });