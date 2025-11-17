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

        <!-- Glowing CLUB button -->
        <router-link to="/club" class="nav-link club-highlight">
          CLUB
        </router-link>
      </div>

      <!-- RIGHT SIDE -->
      <div class="nav-right">
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        >
          <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <div class="lang-switch">
          <button @click="setLang('en')" :class="{ active: locale === 'en' }">EN</button>
          <button @click="setLang('kin')" :class="{ active: locale === 'kin' }">RW</button>
          <button @click="setLang('fr')" :class="{ active: locale === 'fr' }">FR</button>
          <button @click="setLang('ar')" :class="{ active: locale === 'ar' }">AR</button>
        </div>

        <router-link v-if="!user" to="/login" class="login-btn">LOGIN</router-link>

        <div v-else class="profile" @click="dropdown = !dropdown">
          <img :src="user.photoURL || 'https://i.pravatar.cc/150'" class="profile-img" />
          <div v-if="dropdown" class="dropdown">
            <p>{{ user.displayName }}</p>
            <router-link to="/dashboard">Member Dashboard</router-link>
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

      <router-link
        to="/club"
        @click="mobileMenu = false"
        class="club-highlight mobile-club"
      >
        CLUB
      </router-link>
      <router-link
        v-if="!user"
        to="/login"
        @click="mobileMenu = false"
        class="login-btn"
      >
        LOGIN
      </router-link>
      <router-link
        v-else
        to="/dashboard"
        @click="mobileMenu = false"
        class="login-btn"
      >
        Dashboard
      </router-link>
      <button
        class="theme-toggle mobile-toggle-btn"
        @click="toggleTheme"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
      >
        <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { useAuthStore } from '../stores/auth'
import { useThemeStore } from '../stores/theme'
import { storeToRefs } from 'pinia'

const { locale } = useI18n({ useScope: 'global' })
const authStore = useAuthStore()
const { user, logout } = authStore

const mobileMenu = ref(false)
const dropdown = ref(false)
const route = useRoute()

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const setLang = (lang) => {
  localStorage.setItem('lang', lang)

  if (locale && typeof locale === 'object') locale.value = lang
  if (i18n?.global?.locale) i18n.global.locale.value = lang

  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}

watch(() => route.fullPath, () => {
  mobileMenu.value = false
  dropdown.value = false
})

const lockScroll = (state) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = state ? 'hidden' : ''
}

watch(mobileMenu, (val) => lockScroll(val))
onUnmounted(() => lockScroll(false))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: var(--navbar-bg);
  backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 1rem 5%;
  border-bottom: 3px solid #00ff9d;
  transition: background 0.4s ease;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.logo-img {
  height: 65px;
  filter: drop-shadow(0 0 20px #00ff9d);
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.theme-toggle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(0,255,157,0.4);
  background: transparent;
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.theme-toggle:hover {
  background: rgba(0,255,157,0.12);
  color: #00ff9d;
}

.mobile-toggle-btn {
  width: 54px;
  height: 54px;
  margin: 1rem auto 0;
  font-size: 1.2rem;
}

.nav-link {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active:not(.club-highlight) {
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
}

/* Glowing CLUB button */
.club-highlight {
  background: linear-gradient(45deg, #00ff9d, #00cc7a) !important;
  color: black !important;
  padding: 0.6rem 1.6rem !important;
  border-radius: 50px !important;
  font-weight: 900 !important;
  font-size: 1.05rem !important;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.7) !important;
  transition: all 0.3s ease !important;
}

.club-highlight:hover,
.router-link-active.club-highlight {
  transform: scale(1.08) !important;
  box-shadow: 0 0 50px rgba(0, 255, 157, 0.95) !important;
}

.mobile-club {
  display: inline-block;
  margin: 1rem auto;
  padding: 1rem 3rem !important;
  font-size: 1.3rem !important;
}

/* Language Switch */
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

/* Login Button */
.login-btn {
  background: linear-gradient(45deg, #00ff9d, #00cc7a);
  color: black;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 0 30px rgba(0,255,157,0.7);
}

/* Profile */
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

/* Mobile Menu Button */
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

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: min(500px, 90%);
  background: rgba(0,0,0,0.98);
  padding: 2rem 1.5rem;
  text-align: center;
}

.mobile-menu.open {
  display: block;
}

.mobile-menu a {
  display: block;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 992px) {
  .nav-menu, .nav-right { display: none; }
  .mobile-toggle { display: flex; }
}
</style>
