// src/firebase.js
import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0j2kL5vN8kP9mX7rTqWvY8uI9oP0pQ1r",
  authDomain: "ecostay-rwanda.firebaseapp.com",
  projectId: "ecostay-rwanda",
  storageBucket: "ecostay-rwanda.firebasestorage.app",
  messagingSenderId: "1082968745123",
  appId: "1:1082968745123:web:1a2b3c4d5e6f7g8h9i0j"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword
}