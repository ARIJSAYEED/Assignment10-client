// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_v2OS-_G0okPwX-PdhXw7B9ENHf1dLz8",
  authDomain: "assignment10-157b1.firebaseapp.com",
  projectId: "assignment10-157b1",
  storageBucket: "assignment10-157b1.firebasestorage.app",
  messagingSenderId: "460696360206",
  appId: "1:460696360206:web:b780e2c1146129d4c3335f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);