import { takeEvery } from 'redux-saga/effects';
import { NEW_USER_REGISTER, SIGNIN_USER, PUBLISH_IMAGE, GET_PUBLICATIONS } from '../ActionTypes/index';
import workerSignUp from './signUp';
import workerSignIn from './signIn';
import workerPublish from './publish';
import workerPublications from './publications';

export default function* watcher() { // listen and catch when there is one of the events
  yield takeEvery(NEW_USER_REGISTER, workerSignUp);
  yield takeEvery(SIGNIN_USER, workerSignIn);
  yield takeEvery(PUBLISH_IMAGE, workerPublish);
  yield takeEvery(GET_PUBLICATIONS, workerPublications);
}