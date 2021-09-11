import firebase from 'firebase/compat'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBogyOclR0uS-tfm_BSuRaeixAUl3s0oic",
    authDomain: "formsnow-40b50.firebaseapp.com",
    projectId: "formsnow-40b50",
    storageBucket: "formsnow-40b50.appspot.com",
    messagingSenderId: "555025730198",
    appId: "1:555025730198:web:db9b966ef65f4cbbf5d0b7",
    measurementId: "G-252QRD0DVD"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();

export default firebase;