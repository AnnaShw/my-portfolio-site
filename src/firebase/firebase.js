import 'firebase/firestore';
import firebase from 'firebase/app';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC04Ea11QH6SKEJmZhoNvuU00dOw67gJBo",
    authDomain: "portfolio-5985c.firebaseapp.com",
    projectId: "portfolio-5985c",
    storageBucket: "portfolio-5985c.appspot.com",
    messagingSenderId: "881487704419",
    appId: "1:881487704419:web:2aa11c10e939e8bbbe6356",
    measurementId: "G-07NLR9WCJ5"
});

const db= firebaseApp.firestore();

export default db;
