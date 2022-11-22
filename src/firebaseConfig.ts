import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDnJfkgCtSI1hBlCop4B43eMI6oeY63moY",
  authDomain: "shoutouts-55694.firebaseapp.com",
  projectId: "shoutouts-55694",
  storageBucket: "shoutouts-55694.appspot.com",
  messagingSenderId: "947222115673",
  appId: "1:947222115673:web:082ff595b13353864ac848",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
