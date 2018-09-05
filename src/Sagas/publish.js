import { call, select, put } from 'redux-saga/effects';
import uuid from 'uuid';
import { firebaseDataBase, firebaseStorage } from '../Store/Services/firebase';
import { successPublish, unsuccessPublish } from '../ActionCreators';

const registerInDataBase = ({
 uid, userKey, pictureUrl, width, height, comments = '', createdAt, time }) => firebaseDataBase.ref(`publications/`)
    .push({ userKey, pictureUrl, width, height, comments, createdAt, time })
    .then(response => response);

const registerAuthorPublications = ({ userKey, key }) => firebaseDataBase.ref(`authorPublications/${userKey}`)
    .update({ [key]: true })
    .then(response => response);

const storeImage = async ({ image }) => { // stores a picture in the firebaseStorage
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
    const { comments, createdAt } = values.payload;
    const image = yield select(state => state.imageGalleryReducer); // gets the object of image with picture data
    const userKey = yield select(state => state.userReducer); // gets the loggedUser
    const pictureUrl = yield call(storeImage, image); // gets the url picture in the storage
    const uid = uuid();
    const { width, height } = image.image;
    const time = new Date().getTime();
    const { key } = yield call(registerInDataBase, { uid, userKey, pictureUrl, width, height, comments, createdAt, time }); // stores the data of new user in firebase database
    yield call(registerAuthorPublications, { userKey, key });
    yield put(successPublish());
  } catch (error) {
    console.log(error);
    yield put(unsuccessPublish());
  }
}

export default workerPublish;
