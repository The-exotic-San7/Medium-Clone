import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHtMerN8q9TW3-UVG7wUY2vtVsQ39xbt0",

  authDomain: "medium-d662b.firebaseapp.com",

  projectId: "medium-d662b",

  storageBucket: "medium-d662b.appspot.com",

  messagingSenderId: "375608349372",

  appId: "1:375608349372:web:8c166cc938031b42fb76b9"


  
});

// Initialize Firebase

const auth = firebase.auth();
export default firebase;
export { auth };
