import { call, select } from 'redux-saga/effects';
import { firebaseDataBase } from '../Store/Services/firebase';

const getPublications = () => firebaseDataBase.ref('/publications/')
  .once('value')
  .then(response => response.val());

function* workerPublications() { // generator function called by the watcher when the app needs to publish and storage a Picture
  try {
    //const userKey = yield select(state => state.userReducer); // gets the loggedUser
    const publications = yield call(getPublications);
    console.log('Publications : ', publications);
  } catch (error) {
    console.log(error);
  }
}

export default workerPublications;