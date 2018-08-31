import { call, select } from 'redux-saga/effects';
import axios from 'axios';
import uuid from 'uuid';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';
import { firebaseStorage } from '../Store/Services/firebase';

const registerInFirebase = data => 
  authentication.createUserWithEmailAndPassword(data.email, data.password)
  .then(success => success);

const registerInDataBase = ({ uid, username, email, urlProfilePicture }) => firebaseDataBase.ref(`users/${uid}`).set({ username, email, urlProfilePicture })

const storeImage = async ({ image }) => { 
  const { uri, type } = image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const file = { uri, type, name };

  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebaseStorage.ref(`/coffegram/users/${name}`);
  const snapshot = await ref.put(blob);
  return ref.getDownloadURL().then(url => url);
};

export default function* workerSignUp(values) { // generator function called by the watcher when the app needs to signUp or signIn
  try {
    const responseUserRegistry = yield call (registerInFirebase, values.payload); // register the new user in firebase auth
    const { payload: { name } } = values;
    const { email, uid } = responseUserRegistry.user;
    const image = yield select(state => state.imageSignUpReducer); // gets the object of image with picture data of signUp profile
    const urlProfilePicture = yield call(storeImage, image); // gets the url picture
    yield call (registerInDataBase, {username: name, email, urlProfilePicture, uid}); // stores the data of new user in firebase database
  } catch(error) {
      console.log(error);
  }
}