// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUDg4EIv7Nt7ssMPgFT-ERwCzBSZltjAg",
  authDomain: "the-unsent-bsit-project.firebaseapp.com",
  projectId: "the-unsent-bsit-project",
  storageBucket: "the-unsent-bsit-project.firebasestorage.app",
  messagingSenderId: "207127929208",
  appId: "1:207127929208:web:583d2a88382e5b2b15e88d",
  measurementId: "G-RBZEDMSEL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
