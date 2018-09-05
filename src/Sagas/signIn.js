import { call } from 'redux-saga/effects';
import { authentication  } from '../Store/Services/firebase';

const signInFirebase = data => authentication.signInWithEmailAndPassword(data.email, data.password)
.then(success => success);

export default function* workerSignIn(values) {
  try {
    yield call (signInFirebase, values.payload);
  } catch(error) {
    console.log(error);
  }
}