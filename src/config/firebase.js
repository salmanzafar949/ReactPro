import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuPbcGbzK8TkBw9Y5ayk894dsjoPSudDk",
    authDomain: "react-pro-1-4e2ed.firebaseapp.com",
    databaseURL: "https://react-pro-1-4e2ed.firebaseio.com",
    projectId: "react-pro-1-4e2ed",
    storageBucket: "react-pro-1-4e2ed.appspot.com",
    messagingSenderId: "564602133414",
    appId: "1:564602133414:web:1fe9809a33471226a3cd67"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
