// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJlQH22d2-B6E3-k4bADGmLNGcijyfPps",
  authDomain: "a11-client-side-volunteer.firebaseapp.com",
  projectId: "a11-client-side-volunteer",
  storageBucket: "a11-client-side-volunteer.firebasestorage.app",
  messagingSenderId: "1040340322831",
  appId: "1:1040340322831:web:144d724a6fcb935434b17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
