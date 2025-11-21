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

// Prefer reading sensitive values from environment variables (Vite uses import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD0j2kL5vN8kP9mX7rTqWvY8uI9oP0pQ1r",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ecostay-rwanda.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ecostay-rwanda",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ecostay-rwanda.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1082968745123",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1082968745123:web:1a2b3c4d5e6f7g8h9i0j"
}

// Helpful debug hint when running locally: warn if an obviously placeholder API key is present
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  // Do not expose secrets in logs; just warn that env var isn't set
  console.warn('[firebase] VITE_FIREBASE_API_KEY not set — using value embedded in source. If you see "api-key-not-valid" error, verify your API key in Firebase Console and/or set VITE_FIREBASE_API_KEY in .env.local')
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