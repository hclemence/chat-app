// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuvOi8a-Qjfw0pIVE34IlAmdjOuJmvJ_k",
  authDomain: "chat-9cb64.firebaseapp.com",
  projectId: "chat-9cb64",
  storageBucket: "chat-9cb64.appspot.com",
  messagingSenderId: "424791330731",
  appId: "1:424791330731:web:17212c2c5a6e56230b4cee",
  measurementId: "G-EMPK4DK0T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth}