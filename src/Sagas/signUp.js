import { call, select } from 'redux-saga/effects';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';
import { URL_UPLOAD_IMAGE, PRESET_UPLOAD_IMAGE } from '../ActionTypes/index';

const registerInFirebase = data => 
  authentication.createUserWithEmailAndPassword(data.email, data.password)
  .then(success => success);

const registerInDataBase = ({ uid, username, email }) => firebaseDataBase.ref(`users/${uid}`).set({ username, email})

const storeImage = (values) => {
  const { uri, type } = values.image;
  const name = uri.split('/').pop();
  const picture = {
    uri: uri,
    type: type,
    name: name,
  };
  const formImage = FormData();
  formImage.append('file', picture);
  formImage.append('upload_preset', PRESET_UPLOAD_IMAGE);
  return fetch(URL_UPLOAD_IMAGE, {
    method: 'POST',
    body: formImage,
  })
};

export default function* workerSignUp(values) {
  try {
    
    const image = yield select(state => state.imageSignUpReducer); 
    yield call(storeImage, image);
    // const responseUserRegistry = yield call (registerInFirebase, values.payload);
    // const { payload: { name } } = values;
    // const { email, uid } = responseUserRegistry.user;
    // yield call (registerInDataBase, {username: name, email, uid});
  } catch(error) {
    console.log(error);
  }
}