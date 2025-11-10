<template>
  <div class="auth-container">
    <div class="auth-card glass">
      <img src="../assets/logo.png" alt="EcostaStay" class="logo" />
      <h2>{{ $t('auth.register') || 'Create account' }}</h2>

      <form @submit.prevent="handleRegister">
        <input v-model="name" type="text" :placeholder="$t('auth.name') || 'Full name'" required />
        <input v-model="email" type="email" :placeholder="$t('auth.email') || 'Email'" required />
        <input v-model="password" type="password" :placeholder="$t('auth.password') || 'Password'" required />

        <button type="submit" class="glow-btn full">{{ $t('auth.register_btn') || 'Create account' }}</button>
      </form>

      <button @click="googleRegister" class="google-btn">
        <img src="https://www.google.com/favicon.ico" /> {{ $t('auth.google') || 'Continue with Google' }}
      </button>

      <p>
        {{ $t('auth.have_account') || 'Already have an account?' }}
        <router-link to="/login" class="link">{{ $t('auth.login') || 'Login' }}</router-link>
      </p>

      <p v-if="message" class="message success">{{ message }}</p>
      <p v-if="error" class="message error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword } from '../firebase.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const email = ref('')
const password = ref('')
const name = ref('')
const message = ref('')
const error = ref('')

const handleRegister = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    message.value = t('auth.success_register') || 'Account created! Please login.'
    setTimeout(() => router.push('/login'), 1200)
  } catch (err) {
    error.value = err.message || (t('auth.error') || 'Registration failed')
  }
}

const googleRegister = async () => {
  try {
    await signInWithPopup(auth, googleProvider)
    router.push('/')
  } catch (err) {
    error.value = t('auth.google_error') || 'Google sign-in failed'
  }
}
</script>

<style scoped>
.auth-container { min-height: calc(100vh - 80px); display:flex; align-items:center; justify-content:center; padding-top: 80px; background: linear-gradient(135deg,#001a0f,#000); }
.auth-card { width: 100%; max-width: 480px; padding: 2.5rem; border-radius: 20px; text-align:center; border: 3px solid rgba(0,255,157,0.25); }
.logo { height: 80px; margin-bottom: 1rem; filter: drop-shadow(0 0 30px rgba(0,255,157,0.9)); }
input { width:100%; padding:0.9rem 1rem; margin:0.6rem 0; border-radius:999px; border:none; background: rgba(255,255,255,0.05); color:#fff }
.link { color:#00ff9d; margin-left:0.4rem }
.google-btn { width:100%; padding:0.9rem; margin-top:1rem; background:#fff; color:#000; border-radius:999px; display:flex; align-items:center; justify-content:center; gap:0.75rem }
.message { margin-top:1rem }
.success { background: rgba(0,255,157,0.12); color:#00ff9d; padding:0.6rem; border-radius:8px }
.error { background: rgba(255,0,0,0.08); color:#ff7b7b; padding:0.6rem; border-radius:8px }
.glow-btn.full { width:100%; margin-top:1rem }
</style>
