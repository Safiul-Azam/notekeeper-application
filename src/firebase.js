import {getStorage} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDXRLFXlqWQjPocilq_i5Bse1CS5UI-V_I",
  authDomain: "note-app-35e75.firebaseapp.com",
  projectId: "note-app-35e75",
  storageBucket: "note-app-35e75.appspot.com",
  messagingSenderId: "878640423779",
  appId: "1:878640423779:web:1129f205b6d714a0e8e956"
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);