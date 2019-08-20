import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB6eCyWKhpStSC70IKPiKGuuqp2jRmoquE",
    authDomain: "react-events-app-58a09.firebaseapp.com",
    databaseURL: "https://react-events-app-58a09.firebaseio.com",
    projectId: "react-events-app-58a09",
    storageBucket: "",
    messagingSenderId: "1088594518589",
    appId: "1:1088594518589:web:a466a9b0a95078e9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;