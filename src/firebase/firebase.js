import firebase from 'firebase';

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

firebase.initializeApp(firebaseConfig);

export default firebase;

