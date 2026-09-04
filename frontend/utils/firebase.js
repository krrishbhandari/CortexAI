// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-3bd0a.firebaseapp.com",
  projectId: "cortexai-3bd0a",
  storageBucket: "cortexai-3bd0a.firebasestorage.app",
  messagingSenderId: "127574851336",
  appId: "1:127574851336:web:0bce480bd699847f94b6bd",
  measurementId: "G-VSYLCSNK2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

