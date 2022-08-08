// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw-GgFNQcF-Lh_JQ15lvMEJLzT4OGlISU",
  authDomain: "instag-9e251.firebaseapp.com",
  projectId: "instag-9e251",
  storageBucket: "instag-9e251.appspot.com",
  messagingSenderId: "579641322170",
  appId: "1:579641322170:web:86e2e78b0139123c5cb083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

  }).catch((error) => {
    console.log(error);
  });
}

