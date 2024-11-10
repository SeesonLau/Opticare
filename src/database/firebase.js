// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgxLZrJC1-_zT_CWPO5tEJtGWLUpeB3b0",
  authDomain: "opticare-b5d09.firebaseapp.com",
  projectId: "opticare-b5d09",
  storageBucket: "opticare-b5d09.appspot.com",
  messagingSenderId: "8792875923",
  appId: "1:8792875923:web:5233da06fa8f1098c57e66",
  measurementId: "G-CHT8PR1ZEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For Realtime Database
const database = getDatabase(app);

// Or for Firestore
const firestore = getFirestore(app);