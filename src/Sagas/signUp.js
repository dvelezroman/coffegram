import { call } from 'redux-saga/effects';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';

const registerInFirebase = data => 
  authentication.createUserWithEmailAndPassword(data.email, data.password)
  .then(success => success);

const registerInDataBase = ({ uid, username, email }) => firebaseDataBase.ref(`users/${uid}`).set({ username, email})

export default function* workerSignUp(values) {
  try {
    const responseUserRegistry = yield call (registerInFirebase, values.payload);
    const { payload: { name } } = values;
    const { email, uid } = responseUserRegistry.user;
    yield call (registerInDataBase, {username: name, email, uid});
  } catch(error) {
    console.log(error);
  }
}