import { call, select } from 'redux-saga/effects';
import uuid from 'uuid';
import { authentication, firebaseDataBase } from '../Store/Services/firebase';
import { firebaseStorage } from '../Store/Services/firebase';


const registerInDataBase = ({ uid, userKey, pictureUrl, comments, createdAt }) => firebaseDataBase.ref(`publications/${uid}`).set({ userKey, pictureUrl, comments, createdAt })

const storeImage = async ({ image }) => { 
  const { uri, type } = image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const file = { uri, type, name };

  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebaseStorage.ref(`/coffegram/publications/${name}`);
  const snapshot = await ref.put(blob);
  return ref.getDownloadURL().then(url => url);
};

function* workerPublish(values) { // generator function called by the watcher when the app needs to publish and storage a Picture
  try {
    const { comments } = values.payload
    const image = yield select(state => state.imageGalleryReducer); // gets the object of image with picture data
    const userKey = yield select(state => state.userReducer); // gets the loggedUser
    const pictureUrl = yield call(storeImage, image); // gets the url picture in the storage 
    const createdAt = Date().split('(')[0];
    const uid = uuid();
    yield call(registerInDataBase, { uid, userKey, pictureUrl, comments, createdAt }); // stores the data of new user in firebase database
  } catch(error) {
      console.log(error);
  }
}

export default workerPublish;