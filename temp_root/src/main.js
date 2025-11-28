// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './index.css'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)

app.config.errorHandler = (err, instance, info) => {
  console.error('[Vue Error]', err, info)
}

// INIT AUTH BEFORE MOUNT
try {
  const authStore = useAuthStore()
  authStore.init()
} catch (err) {
  console.error('[Auth Init Error]', err)
}

app.mount('#app')