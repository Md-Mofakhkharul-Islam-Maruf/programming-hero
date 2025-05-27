// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM5V_k5E63YWUVqLaww0pUiZHczs5ErbM",
  authDomain: "fir-auth-3e281.firebaseapp.com",
  projectId: "fir-auth-3e281",
  storageBucket: "fir-auth-3e281.firebasestorage.app",
  messagingSenderId: "101657737214",
  appId: "1:101657737214:web:f2a2b0050da8304f1332af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);