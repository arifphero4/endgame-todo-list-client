// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALnyVUO4OZlbh1j9s7X8dvsXBMIZJBDqc",
  authDomain: "to-do-web-app-cda6f.firebaseapp.com",
  projectId: "to-do-web-app-cda6f",
  storageBucket: "to-do-web-app-cda6f.appspot.com",
  messagingSenderId: "162888554787",
  appId: "1:162888554787:web:ee69554527753d5ccdd496",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
