import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-app-4ec8c.firebaseapp.com",
  projectId: "chat-app-4ec8c",
  storageBucket: "chat-app-4ec8c.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESS_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEA_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
