// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsADOkOc2zykVVmOzMQitXEPxKc5WpsSg",
  authDomain: "home-mart-b85e8.firebaseapp.com",
  projectId: "home-mart-b85e8",
  storageBucket: "home-mart-b85e8.appspot.com",
  messagingSenderId: "107983133382",
  appId: "1:107983133382:web:a0fce85832f8dbe48295c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
