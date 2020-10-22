import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCV0Zu46waShsALaS3xXFFppAJdEWn9jfc",
  authDomain: "clone-2ed21.firebaseapp.com",
  databaseURL: "https://clone-2ed21.firebaseio.com",
  projectId: "clone-2ed21",
  storageBucket: "clone-2ed21.appspot.com",
  messagingSenderId: "651130521901",
  appId: "1:651130521901:web:4de7bb28c441fdc6706ba4",
  measurementId: "G-S4SF4WFLEQ",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };


// If firebase expired
// https://console.firebase.google.com/u/0/project/clone-2ed21/firestore/rules