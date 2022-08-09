
import { initializeApp } from "firebase/app";
import 'firebase/database'
import firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBM7oXDSYg3qOhwEwwHHLjuMlBzCP9WXH8",
  authDomain: "notekeeper-application.firebaseapp.com",
  projectId: "notekeeper-application",
  storageBucket: "notekeeper-application.appspot.com",
  messagingSenderId: "814653746209",
  appId: "1:814653746209:web:bbf9296d8779b004c20760"
};
const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()