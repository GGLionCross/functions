// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBAM68SmTLCfb7XV0cJizB9uh5M-8R2hM0",
  authDomain: "functions-1e766.firebaseapp.com",
  projectId: "functions-1e766",
  storageBucket: "functions-1e766.appspot.com",
  messagingSenderId: "1045236061054",
  appId: "1:1045236061054:web:4ac896d5adb7a33a96192f"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
let pGoogle = new firebase.auth.GoogleAuthProvider();
let getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
let storageRef = firebase.storage().ref();

export {
  firebaseAuth,
  firebaseDb,
  pGoogle,
  getCurrentUser,
  storageRef
};