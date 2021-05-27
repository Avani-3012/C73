
import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfQH1cWXNBron23BNPuFoCiNzok1bujNM",
    authDomain: "storyhub2-bd2ea.firebaseapp.com",
    projectId: "storyhub2-bd2ea",
    storageBucket: "storyhub2-bd2ea.appspot.com",
    messagingSenderId: "721814063195",
    appId: "1:721814063195:web:bf3fcb115df0b06d01177e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();