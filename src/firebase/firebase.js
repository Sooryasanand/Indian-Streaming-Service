import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRCDTuECO3dD7HxsqygllvsoX0YnAycG4",
    authDomain: "stream-flex.firebaseapp.com",
    databaseURL: "https://stream-flex-default-rtdb.firebaseio.com",
    projectId: "stream-flex",
    storageBucket: "stream-flex.appspot.com",
    messagingSenderId: "215073420484",
    appId: "1:215073420484:web:1219ebdbb8ac0a64de0591",
    measurementId: "G-SRG8RXNGJF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; 