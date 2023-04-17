// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHWty0Xr42lM_TqT96i-R-cW774sri8s",
  authDomain: "simple-auth-breeze-ai.firebaseapp.com",
  projectId: "simple-auth-breeze-ai",
  storageBucket: "simple-auth-breeze-ai.appspot.com",
  messagingSenderId: "966380558621",
  appId: "1:966380558621:web:0e585c8cc4fcd46dbae9f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
