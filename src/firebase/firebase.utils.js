import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyA3oABWMVtuBb2M2x6tqcSZfqluQVmqS5s",
    authDomain: "crwn-clothing-database-95931.firebaseapp.com",
    projectId: "crwn-clothing-database-95931",
    storageBucket: "crwn-clothing-database-95931.appspot.com",
    messagingSenderId: "939052983565",
    appId: "1:939052983565:web:a8d64e46681c2a4c8e7c44",
    measurementId: "G-DK2XGW3XW2"
  };
  firebase.initializeApp(config);


  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  export default firebase;
