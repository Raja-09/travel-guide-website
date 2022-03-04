import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fireBaseApp = {
    apiKey: "AIzaSyD8J7I5P0fpptDJb2DgM-ZZ_a5_Cs0BwtA",
    authDomain: "travel-guide-c759d.firebaseapp.com",
    projectId: "travel-guide-c759d",
    storageBucket: "travel-guide-c759d.appspot.com",
    messagingSenderId: "480524957654",
    appId: "1:480524957654:web:4eecfee77b1a9461be1677",
    measurementId: "G-FW3M1FK3M0"
  };
  const db = firebase.initializeApp(fireBaseApp).firestore();
  const auth = firebase.auth();
  
  export { db, auth }