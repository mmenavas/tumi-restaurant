// Fill out firebase account information below and
// copy this file to firebase.js
import firebase from 'firebase';

const config = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id"
};

firebase.initializeApp(config);

export default firebase;
