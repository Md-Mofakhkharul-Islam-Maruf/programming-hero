// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9D229YbfGPTCrlJiqlMr4TjHOVK2-m0",
  authDomain: "dragon-news-ebf9a.firebaseapp.com",
  projectId: "dragon-news-ebf9a",
  storageBucket: "dragon-news-ebf9a.firebasestorage.app",
  messagingSenderId: "116577996567",
  appId: "1:116577996567:web:c655f7518dc7b4022df152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;