<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- LOGO -->
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="EcostaStay" class="logo-img" />
      </router-link>

      <!-- DESKTOP LINKS -->
      <div class="nav-menu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/tourism" class="nav-link">Tourism</router-link>
        <router-link to="/hospitality" class="nav-link">Hospitality</router-link>
        <router-link to="/club" class="nav-link">Club</router-link>
      </div>

      <!-- RIGHT SIDE -->
      <div class="nav-right">
        <div class="lang-switch">
          <button @click="setLang('en')" :class="{ active: locale === 'en' }">EN</button>
          <button @click="setLang('kin')" :class="{ active: locale === 'kin' }">RW</button>
          <button @click="setLang('fr')" :class="{ active: locale === 'fr' }">FR</button>
          <button @click="setLang('ar')" :class="{ active: locale === 'ar' }">AR</button>
        </div>

        <router-link v-if="!user" to="/login" class="login-btn">LOGIN</router-link>
        <div v-else class="profile" @click="dropdown = !dropdown">
          <img :src="user.photoURL" class="profile-img" />
          <div v-if="dropdown" class="dropdown">
            <p>{{ user.displayName }}</p>
            <p>Language: {{ locale.toUpperCase() }}</p>
            <router-link to="/profile">Edit Profile</router-link>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button @click="mobileMenu = !mobileMenu" class="mobile-toggle">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div class="mobile-menu" :class="{ open: mobileMenu }">
      <router-link to="/" @click="mobileMenu = false">Home</router-link>
      <router-link to="/tourism" @click="mobileMenu = false">Tourism</router-link>
      <router-link to="/hospitality" @click="mobileMenu = false">Hospitality</router-link>
      <router-link to="/club" @click="mobileMenu = false">Club</router-link>
      <router-link to="/login" @click="mobileMenu = false" class="login-btn">LOGIN</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { useAuthStore } from '../stores/auth'

// use the global i18n scope so changes affect the whole app
const { locale } = useI18n({ useScope: 'global' })
const authStore = useAuthStore()
const { user, logout } = authStore

const mobileMenu = ref(false)
const dropdown = ref(false)

const setLang = (lang) => {
  // persist preference
  localStorage.setItem('lang', lang)

  // try updating the composable locale first
  if (locale && typeof locale === 'object') {
    locale.value = lang
  }

  // also update the global i18n instance to be safe
  if (i18n && i18n.global && i18n.global.locale) {
    i18n.global.locale.value = lang
  }

  // set document language and direction for RTL languages
  try {
    document.documentElement.lang = lang
    if (lang === 'ar') document.documentElement.dir = 'rtl'
    else document.documentElement.dir = 'ltr'
  } catch (e) {
    /* ignore in non-browser env */
  }
}
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 1rem 5%;
  border-bottom: 3px solid #00ff9d;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-img {
  height: 65px;
  filter: drop-shadow(0 0 20px #00ff9d);
}

.nav-menu {
  display: flex;
  gap: 3rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: 0.3s;
}

.nav-link:hover, .nav-link.router-link-active {
  background: #00ff9d;
  color: black;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.lang-switch {
  display: flex;
  background: rgba(0, 255, 157, 0.2);
  padding: 0.5rem;
  border-radius: 50px;
  border: 2px solid #00ff9d;
}

.lang-switch button {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: transparent;
  color: white;
  border: none;
  font-weight: bold;
}

.lang-switch button.active {
  background: #00ff9d;
  color: black;
}

.login-btn {
  background: linear-gradient(45deg, #00ff9d, #00cc7a);
  color: black;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.7);
}

.profile {
  position: relative;
  cursor: pointer;
}

.profile-img {
  width: 50px; height: 50px;
  border-radius: 50%;
  border: 3px solid #00ff9d;
}

.dropdown {
  position: absolute;
  top: 60px; right: 0;
  background: rgba(0,0,0,0.95);
  border: 2px solid #00ff9d;
  border-radius: 15px;
  padding: 1rem;
  width: 200px;
  text-align: center;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
}

.mobile-toggle span {
  width: 30px; height: 3px;
  background: #00ff9d;
  border-radius: 3px;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 80px; left: 0; right: 0;
  background: rgba(0,0,0,0.98);
  padding: 2rem;
  text-align: center;
}

.mobile-menu.open {
  display: block;
}

.mobile-menu a {
  display: block;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

/* MOBILE */
@media (max-width: 992px) {
  .nav-menu, .nav-right { display: none; }
  .mobile-toggle { display: flex; }
}
</style>