import { call, put, select, all } from 'redux-saga/effects';
import { firebaseDataBase } from '../Store/Services/firebase';
import { loadPublicationsToStore, loadAuthorsToStorage } from '../ActionCreators/index';

const orderPublications = (array) => {
  const publications = array.sort(function (a, b) {
    if (a.time < b.time) {
      return 1;
    }
    if (a.time > b.time) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return publications;
}

const getPublications = () => firebaseDataBase.ref('/publications/')
  .once('value')
  .then(snapshot => {
    let publications = [];
    snapshot.forEach((childSnapshot) => {
      const { key } = childSnapshot;
      let publication = childSnapshot.val();
      publication.key = key;
      publications.push(publication);
    });
    return publications;
  });

const getAuthor = (userKey) => firebaseDataBase.ref(`/users/${userKey}`)
  .once('value')
  .then(snapshot => snapshot.val());

function* workerPublications() {
  // generator function called by the watcher when the app needs to gets the publications and loads to store
  try {
    //const userKey = yield select(state => state.userReducer); // gets the loggedUser
    const publications = yield call(getPublications); // gets the publications refs from firebaseDatabase
    publications = orderPublications(publications);
    const authors = yield all(publications.map(publication => getAuthor(publication.userKey))); // get the author for each publication
    yield put(loadAuthorsToStorage(authors)); // loads the authors to the store
    yield put(loadPublicationsToStore(publications)); // loads the publications to the store
  } catch (error) {
    console.log(error);
  }
}

export default workerPublications;