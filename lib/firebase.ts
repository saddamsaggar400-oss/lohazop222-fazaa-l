// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // Paste config here
  apiKey: "AIzaSyC0e36QlnWyK1s3VYPaJGIlrYbtna-pmYU",
  authDomain: "dsdsghghg.firebaseapp.com",
  databaseURL: "https://dsdsghghg-default-rtdb.firebaseio.com",
  projectId: "dsdsghghg",
  storageBucket: "dsdsghghg.firebasestorage.app",
  messagingSenderId: "311506232004",
  appId: "1:311506232004:web:534a056226f23f4ae61f91",
  measurementId: "G-4Z71P85S1J"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
