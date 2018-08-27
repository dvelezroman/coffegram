import * as firebase from 'firebase';

import { YellowBox } from 'react-native'; // https://github.com/firebase/firebase-js-sdk/issues/97
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

// Initialize Firebase


firebase.initializeApp(config);

export const authentication = firebase.auth();
export const firebaseDataBase = firebase.database();
