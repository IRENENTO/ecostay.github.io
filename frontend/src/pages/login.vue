<template>
  <div class="auth-container">
    <div class="auth-card glass">
      <img src="../assets/logo.png" alt="EcostaStay" class="logo" />
      <h2>{{ isLogin ? $t('auth.login') : $t('auth.register') }}</h2>

      <form @submit.prevent="handleAuth">
        <input v-model="email" type="email" :placeholder="$t('auth.email')" required />
        <input v-model="password" type="password" :placeholder="$t('auth.password')" required />
        <input v-if="!isLogin" v-model="name" type="text" :placeholder="$t('auth.name')" required />

        <div class="form-row">
          <label class="remember">
            <input type="checkbox" v-model="remember" />
            <span>{{ $t('auth.remember') || 'Remember me' }}</span>
          </label>
          <button type="button" class="link-btn" @click="forgotPassword">
            {{ $t('auth.forgot') || 'Forgot password?' }}
          </button>
        </div>

        <button type="submit" class="glow-btn full" :disabled="loading">
          <span v-if="!loading">
            {{ isLogin ? $t('auth.login_btn') : $t('auth.register_btn') }}
          </span>
          <span v-else class="loader">{{ $t('auth.loading') || 'Please wait...' }}</span>
        </button>
      </form>

      <button @click="googleLogin" class="google-btn">
        <img src="https://www.google.com/favicon.ico" /> {{ $t('auth.google') }}
      </button>

      <p>
        {{ $t('auth.no_account') || "Don't have an account?" }}
        <router-link to="/register" class="link">{{ $t('auth.register') || 'Create account' }}</router-link>
      </p>

      <p v-if="message" class="message success">{{ message }}</p>
      <p v-if="resetMessage" class="message success">{{ resetMessage }}</p>
      <p v-if="error" class="message error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from '../firebase.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const name = ref('')
const message = ref('')
const error = ref('')
const loading = ref(false)
const remember = ref(false)
const resetMessage = ref('')

const handleAuth = async () => {
  try {
    loading.value = true
    message.value = ''
    error.value = ''
    resetMessage.value = ''
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      message.value = t('auth.success_login')
      setTimeout(() => router.push(remember.value ? '/dashboard' : '/club'), 1200)
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      message.value = t('auth.success_register')
      setTimeout(() => router.push('/club'), 1200)
    }
  } catch (err) {
    error.value = err.message.includes('wrong-password') ? t('auth.wrong_pass') : t('auth.error')
  } finally {
    loading.value = false
  }
}

const googleLogin = async () => {
  try {
  await signInWithPopup(auth, googleProvider)
  router.push('/club')
  } catch (err) {
    error.value = t('auth.google_error')
  }
}

const forgotPassword = async () => {
  if (!email.value) {
    error.value = t('auth.enter_email') || 'Please enter your email first.'
    return
  }
  try {
    error.value = ''
    await sendPasswordResetEmail(auth, email.value)
    resetMessage.value = t('auth.reset_sent') || 'Reset link sent to your inbox.'
  } catch (err) {
    error.value = err.message || (t('auth.error') || 'Something went wrong')
  }
}
</script>

<style scoped>
.auth-container {
  /* account for fixed navbar (approx 80px) so card is centered within visible area */
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px; /* avoid overlap with fixed navbar */
  background: linear-gradient(135deg, #001a0f, #000), url('https://images.unsplash.com/photo-1506905925346-500dc1b1252d?w=1600') center/cover;
}

.auth-card {
  width: 90%;
  max-width: 450px;
  padding: 3rem;
  border-radius: 30px;
  text-align: center;
  border: 3px solid rgba(0,255,157,0.5);
  box-shadow: 0 0 80px rgba(0,255,157,0.4);
}

.logo {
  height: 90px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 30px rgba(0,255,157,0.9));
}

h2 {
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1.2rem;
  margin: 1rem 0;
  border: none;
  border-radius: 50px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 1.1rem;
}

input::placeholder { color: rgba(255,255,255,0.7); }

.form-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0.9rem;
  color:rgba(255,255,255,0.7);
}

.remember{
  display:flex;
  align-items:center;
  gap:0.4rem;
}

.remember input{
  width:auto;
  margin:0;
}

.link-btn{
  background:none;
  border:none;
  color:#00ff9d;
  cursor:pointer;
  font-weight:600;
}

.glow-btn.full { width: 100%; margin: 1.5rem 0; }
.glow-btn:disabled{
  opacity:0.7;
  cursor:not-allowed;
}

.loader{
  display:inline-flex;
  align-items:center;
  gap:0.5rem;
}

.google-btn {
  width: 100%;
  padding: 1rem;
  background: white;
  color: #000;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.link {
  color: #00ff9d;
  cursor: pointer;
  font-weight: bold;
}

.message { margin-top: 1rem; padding: 1rem; border-radius: 10px; }
.success { background: rgba(0,255,157,0.2); color: #00ff9d; }
.error { background: rgba(255,0,0,0.2); color: #ff6b6b; }
</style>