import * as firebase from 'firebase';

// Initialize Firebase


firebase.initializeApp(config);

const authentication = firebase.auth();

export default authentication;
