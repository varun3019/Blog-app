// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-blog-1a99f.firebaseapp.com",
  projectId: "mern-blog-1a99f",
  storageBucket: "mern-blog-1a99f.appspot.com",
  messagingSenderId: "216813441916",
  appId: "1:216813441916:web:5a7c5a02655dfb17cacaf9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);