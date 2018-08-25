import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA4DSEuX0_LhojLhhONG7PaD7b-DRY9sEw',
  authDomain: 'caffeinagram.firebaseapp.com',
  databaseURL: 'https://caffeinagram.firebaseio.com',
  projectId: 'caffeinagram',
  storageBucket: 'caffeinagram.appspot.com',
  messagingSenderId: '1061388647207',
};

firebase.initializeApp(config);

const authentication = firebase.auth();

export default authentication;
