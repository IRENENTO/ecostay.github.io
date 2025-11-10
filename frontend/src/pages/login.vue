<template>
  <div class="auth-container">
    <div class="auth-card glass">
      <img src="../assets/logo.png" alt="EcostaStay" class="logo" />
      <h2>{{ isLogin ? $t('auth.login') : $t('auth.register') }}</h2>

      <form @submit.prevent="handleAuth">
        <input v-model="email" type="email" :placeholder="$t('auth.email')" required />
        <input v-model="password" type="password" :placeholder="$t('auth.password')" required />
        <input v-if="!isLogin" v-model="name" type="text" :placeholder="$t('auth.name')" required />

        <button type="submit" class="glow-btn full">
          {{ isLogin ? $t('auth.login_btn') : $t('auth.register_btn') }}
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
      <p v-if="error" class="message error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const name = ref('')
const message = ref('')
const error = ref('')

const handleAuth = async () => {
  try {
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      message.value = t('auth.success_login')
      setTimeout(() => router.push('/'), 1500)
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      message.value = t('auth.success_register')
      isLogin.value = true
    }
  } catch (err) {
    error.value = err.message.includes('wrong-password') ? t('auth.wrong_pass') : t('auth.error')
  }
}

const googleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider)
    router.push('/')
  } catch (err) {
    error.value = t('auth.google_error')
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

.glow-btn.full { width: 100%; margin: 1.5rem 0; }

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