import { call } from 'redux-saga/effects';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';

const signInFirebase = data => authentication.signInWithEmailAndPassword(data.email, data.password)
.then(success => success);

export default function* workerSignIn(values) {
  console.log(values);
  try {
    const responseUserSignIn = yield call (signInFirebase, values.payload);
    console.log(responseUserSignIn);
  } catch(error) {
    console.log(error);
  }
}