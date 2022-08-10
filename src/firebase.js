import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBM7oXDSYg3qOhwEwwHHLjuMlBzCP9WXH8",
  authDomain: "notekeeper-application.firebaseapp.com",
  databaseURL: "https://notekeeper-application-default-rtdb.firebaseio.com",
  projectId: "notekeeper-application",
  storageBucket: "notekeeper-application.appspot.com",
  messagingSenderId: "814653746209",
  appId: "1:814653746209:web:bbf9296d8779b004c20760"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)