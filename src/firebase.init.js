// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuzaK_ILospOk96IMawJNkCHvdJXcTuVw",
    authDomain: "fitness-trainer-a16fc.firebaseapp.com",
    projectId: "fitness-trainer-a16fc",
    storageBucket: "fitness-trainer-a16fc.appspot.com",
    messagingSenderId: "65298418956",
    appId: "1:65298418956:web:4bdb391d5f92a69f1dcd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;