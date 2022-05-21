
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBfNPcwqWesybUoFVR8ipm3pE7oMQnwkdw",
    authDomain: "bunker-ju.firebaseapp.com",
    projectId: "bunker-ju",
    storageBucket: "bunker-ju.appspot.com",
    messagingSenderId: "260006500359",
    appId: "1:260006500359:web:58c12671dab055a92532a2",
    measurementId: "G-M9V42L3J5Z"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}