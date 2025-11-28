// src/stores/auth.js
import { defineStore } from 'pinia'
import { auth, onAuthStateChanged, signOut } from '../firebase'
import { ref } from 'vue'
import defaultLogo from '../assets/logo.png'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)

  const init = () => {
    onAuthStateChanged(auth, (u) => {
      user.value = u ? {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName || u.email.split('@')[0],
  photoURL: u.photoURL || defaultLogo
      } : null
      loading.value = false
    })
  }

  const logout = async () => {
    await signOut(auth)
    user.value = null
    window.location.href = '/'
  }

  return { user, loading, init, logout }
})