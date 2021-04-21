import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDwpiC3I_ChtZNf7LbnQ5jHZsQcN7hzbHQ',
  authDomain: 'ethernote-eae66.firebaseapp.com',
  projectId: 'ethernote-eae66',
  storageBucket: 'ethernote-eae66.appspot.com',
  messagingSenderId: '251664806071',
  appId: '1:251664806071:web:fa5260320171e652bfdd32',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
