import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8UFS5CwSds-nzpcozF6Pr7nTqOPxiFDA",
  authDomain: "sapienceminds-14e88.firebaseapp.com",
  databaseURL: "https://sapienceminds-14e88-default-rtdb.firebaseio.com",
  projectId: "sapienceminds-14e88",
  storageBucket: "sapienceminds-14e88.firebasestorage.app",
  messagingSenderId: "264617161548",
  appId: "1:264617161548:web:f83729f4706555354915e9",
  measurementId: "G-HRRSCERX7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export {
  database,
  storage,
  ref,
  set,
  push,
  get,
  storageRef,
  uploadBytes,
  getDownloadURL,
};
