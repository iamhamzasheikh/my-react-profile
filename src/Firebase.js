// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZrgcT4oXtNbEm-Nbzx7AereYEgPW06n8",
    authDomain: "hamza-sheikh-portfolio.firebaseapp.com",
    projectId: "hamza-sheikh-portfolio",
    storageBucket: "hamza-sheikh-portfolio.appspot.com",
    messagingSenderId: "1043344042157",
    appId: "1:1043344042157:web:5f8cebf8f386a2d6ebfe24",
    measurementId: "G-23J4M5VS39"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Firestore
