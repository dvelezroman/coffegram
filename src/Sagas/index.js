import { takeEvery, call } from 'redux-saga/effects';
import { NEW_USER_REGISTER, SIGNIN_USER } from '../ActionTypes/index';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';

const registerInFirebase = data => 
  authentication.createUserWithEmailAndPassword(data.email, data.password)
  .then(success => success);

const registerInDataBase = ({ uid, username, email }) => firebaseDataBase.ref(`users/${uid}`).set({ username, email})

const signInFirebase = data => authentication.signInWithEmailAndPassword(data.email, data.password)
.then(success => success.toJSON());

const signInDatabase = ({ uid }) => firebaseDataBase.ref(`users/${uid}`).get()

function* workerRegister(values) {
  try {
    const responseUserRegistry = yield call (registerInFirebase, values.payload);
    const { payload: { name } } = values;
    const { email, uid } = responseUserRegistry.user;
    yield call (registerInDataBase, {username: name, email, uid});
  } catch(error) {
    console.log(error);
  }
}

function* workerSignIn(values) {
  console.log(values);
  try {
    const responseUserSignIn = yield call (signInFirebase, values.payload);
    console.log(responseUserSignIn);
  } catch(error) {
    console.log(error);
  }
}

export default function* watcher() {
  yield takeEvery(NEW_USER_REGISTER, workerRegister);
  yield takeEvery(SIGNIN_USER, workerSignIn);
}