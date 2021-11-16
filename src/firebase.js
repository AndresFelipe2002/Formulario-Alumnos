import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqDa5JztU7DnD9CnJm9c41Dx3eVi4Nr6Y",
  authDomain: "forms-students-1c935.firebaseapp.com",
  databaseURL: "https://forms-students-1c935-default-rtdb.firebaseio.com",
  projectId: "forms-students-1c935",
  storageBucket: "forms-students-1c935.appspot.com",
  messagingSenderId: "173798561220",
  appId: "1:173798561220:web:41296e951db2cb51370091"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();