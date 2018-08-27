import { takeEvery } from 'redux-saga/effects';
import { NEW_USER_REGISTER, SIGNIN_USER } from '../ActionTypes/index';
import workerSignUp from './signUp';
import workerSignIn from './signIn';

export default function* watcher() {
  yield takeEvery(NEW_USER_REGISTER, workerSignUp);
  yield takeEvery(SIGNIN_USER, workerSignIn);
}