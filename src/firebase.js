// config file for backend.
import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyD-vcpWt9ErtW3UGDaPOJ5CKrF5gcx0tRA",
    authDomain: "parths-messenger.firebaseapp.com",
    databaseURL: "https://parths-messenger.firebaseio.com",
    projectId: "parths-messenger",
    storageBucket: "parths-messenger.appspot.com",
    messagingSenderId: "370192240855",
    appId: "1:370192240855:web:46a25bb8d0acaafe6b2092",
    measurementId: "G-DHLRVEYXR2"

});

const db = firebaseApp.firestore();

export default db;