 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDjevp97uynDGMiC2EboVDSEoF-Cs6mH6Y",
  authDomain: "maverik-63ad0.firebaseapp.com",
  projectId: "maverik-63ad0",
  storageBucket: "maverik-63ad0.appspot.com",
  messagingSenderId: "298374767134",
  appId: "1:298374767134:web:bcf458e2786c3b27c5040f",
  measurementId: "G-0BRKJLQSDM"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const db = getFirestore(app)
 export {auth,db}