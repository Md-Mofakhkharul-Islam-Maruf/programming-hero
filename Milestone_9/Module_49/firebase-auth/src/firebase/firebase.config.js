// Import the functions you need from the SDKs you needimport { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9z8INg6BehHks9M4riICRmBcG-1eqJQ",
  authDomain: "fir-auth-2-d7e95.firebaseapp.com",
  projectId: "fir-auth-2-d7e95",
  storageBucket: "fir-auth-2-d7e95.firebasestorage.app",
  messagingSenderId: "719627266888",
  appId: "1:719627266888:web:736ff46cb424affcb1617d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);