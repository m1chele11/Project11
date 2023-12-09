import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCiYFZZa_hhfjUe4eENcEFRxJptTJLcnk0",
    authDomain: "airbnb-37842.firebaseapp.com",
    projectId: "airbnb-37842",
    storageBucket: "airbnb-37842.appspot.com",
    messagingSenderId: "226927644532",
    appId: "1:226927644532:web:5a3feda6c3978bac54a621",
    measurementId: "G-JDFNX11ZCL"
  };


 // Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

//export { app, analytics }; // Export the initialized Firebase app