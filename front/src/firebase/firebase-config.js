// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-Wx27g4YVdk5tSxbHIj5tiHgtyHpvotc",
    authDomain: "ferreteriaraul-53545.firebaseapp.com",
    projectId: "ferreteriaraul-53545",
    storageBucket: "ferreteriaraul-53545.appspot.com",
    messagingSenderId: "542392954232",
    appId: "1:542392954232:web:a6eea1dace1e9c3aafec8d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //Para realizar las autenticaciones