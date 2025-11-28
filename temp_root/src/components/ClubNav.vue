<template>
  <header class="club-nav">
    <div class="club-container">
      <div class="nav-brand">
        <a href="/" class="ecostay-home" title="Back to EcoStay Home">
          <img src="../assets/logo.png" alt="EcostaStay" />
          <span class="home-text">Home</span>
        </a>
        <div class="brand-divider"></div>
        <span class="club-title">EcoStay Club</span>
      </div>

      <nav class="club-links">
        <a href="#home" class="club-link">Home</a>
        <a href="#story" class="club-link">Story</a>
        <a href="#mission" class="club-link">Mission</a>
        <a href="#events" class="club-link">Sessions</a>
        <a href="#contribute" class="club-link">Contribute</a>
        <a href="#team" class="club-link">Team</a>
        <a href="#news" class="club-link">News</a>
        <a href="#join" class="club-link cta">Join Us</a>
      </nav>
      <div class="club-actions">
        <button class="sign-in-btn" @click="showSignIn = true">Sign In</button>
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        >
          <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button class="club-hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="club-mobile" @click.self="menuOpen = false">
        <a href="/" @click="menuOpen = false" class="mobile-home-btn">🏠 EcoStay Home</a>
        <div class="mobile-menu-divider"></div>
        
        <div class="mobile-section-title">Club Navigation</div>
        <a href="#home" @click="menuOpen = false">Home</a>
        <a href="#story" @click="menuOpen = false">Story</a>
        <a href="#mission" @click="menuOpen = false">Mission</a>
        <a href="#events" @click="menuOpen = false">Sessions</a>
        <a href="#contribute" @click="menuOpen = false">Contribute</a>
        <a href="#team" @click="menuOpen = false">Team</a>
        <a href="#news" @click="menuOpen = false">News</a>
        <a href="#join" @click="menuOpen = false" class="join-us-mobile">Join Us</a>
        <button class="sign-in-mobile" @click="handleMobileSignIn">Sign In</button>
      </div>
    </transition>

    <SignInModal v-if="showSignIn" @close="showSignIn = false" />
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'
import SignInModal from './SignInModal.vue'

const menuOpen = ref(false)
const showSignIn = ref(false)
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const toggleBodyScroll = (state) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = state ? 'hidden' : ''
}

const handleMobileSignIn = () => {
  menuOpen.value = false
  showSignIn.value = true
}

watch(menuOpen, (state) => toggleBodyScroll(state))
onUnmounted(() => toggleBodyScroll(false))
</script>

<style scoped>
.club-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: var(--navbar-bg);
  backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 1rem 5%;
  border-bottom: 2px solid #00ff9d;
  transition: background 0.4s ease;
  height: 80px;
  display: flex;
  align-items: center;
}

.club-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  min-width: max-content;
}

.ecostay-home {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #00ff9d;
  font-weight: 600;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.ecostay-home:hover {
  transform: scale(1.05);
}

.ecostay-home img {
  height: 50px;
  width: auto;
  filter: drop-shadow(0 0 14px #00ff9d);
}

.ecostay-home .home-text {
  font-size: 0.9rem;
  color: #00ff9d;
  white-space: nowrap;
}

.brand-divider {
  width: 2px;
  height: 45px;
  background: rgba(0, 255, 157, 0.3);
  flex-shrink: 0;
}

.club-title {
  color: white;
  font-weight: 700;
  font-size: 1rem;
  background: linear-gradient(135deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  flex-shrink: 0;
}

.club-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.club-link {
  color: var(--text-main);
  text-decoration: none;
  padding: 0.5rem 0.85rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.club-link:hover {
  background: rgba(0, 255, 157, 0.15);
  color: #00ff9d;
}

.club-link.cta {
  background: #00ff9d;
  color: black;
  border-radius: 20px;
  padding: 0.55rem 1.2rem;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.35);
  font-weight: 700;
}

.club-link.cta:hover {
  background: #00ff9d;
  box-shadow: 0 0 25px rgba(0, 255, 157, 0.6);
}

.club-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.sign-in-btn {
  background: transparent;
  border: 2px solid #00ff9d;
  color: #00ff9d;
  padding: 0.55rem 1.4rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.sign-in-btn:hover {
  background: #00ff9d;
  color: black;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.6);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 157, 0.4);
  background: transparent;
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.theme-toggle:hover {
  border-color: #00ff9d;
  color: #00ff9d;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
}

.club-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.club-hamburger span {
  width: 28px;
  height: 3px;
  background: #00ff9d;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.club-mobile {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 255, 157, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.3rem;
  text-align: center;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.club-mobile a {
  color: white;
  text-decoration: none;
  padding: 1rem 0.9rem;
  border-radius: 8px;
  display: block;
  font-weight: 600;
  transition: all 0.3s ease;
}

.club-mobile a:hover {
  background: rgba(0, 255, 157, 0.1);
  color: #00ff9d;
}

.mobile-home-btn {
  background: rgba(0, 255, 157, 0.15);
  border-left: 4px solid #00ff9d;
  border-radius: 8px;
  font-weight: 700;
  color: #00ff9d;
  margin-bottom: 0.8rem;
}

.mobile-home-btn:hover {
  background: rgba(0, 255, 157, 0.25);
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
}

.mobile-menu-divider {
  height: 1px;
  background: rgba(0, 255, 157, 0.2);
  margin: 0.8rem 0;
}

.mobile-section-title {
  color: #00ff9d;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 1rem 0.9rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  text-align: left;
  margin-top: 0.5rem;
}

.join-us-mobile {
  background: #00ff9d !important;
  color: black !important;
  border-radius: 12px;
  padding: 0.9rem 1.5rem !important;
  font-weight: 700;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  display: block;
}

.join-us-mobile:hover {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.6);
  transform: scale(1.02);
}

.sign-in-mobile {
  background: #00ff9d;
  color: black;
  border: none;
  font-weight: 700;
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sign-in-mobile:hover {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.6);
  transform: scale(1.02);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1000px) {
  .club-links {
    gap: 0.3rem;
  }

  .club-link {
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
  }

  .club-link.cta {
    padding: 0.55rem 1rem;
  }
}

@media (max-width: 900px) {
  .club-nav {
    padding: 0.9rem 4%;
  }

  .club-container {
    gap: 1.5rem;
  }

  .nav-brand {
    min-width: auto;
  }

  .club-title {
    display: none;
  }

  .brand-divider {
    display: none;
  }

  .ecostay-home .home-text {
    display: none;
  }

  .club-links {
    display: none;
  }

  .sign-in-btn {
    display: none;
  }

  .club-hamburger {
    display: flex;
  }

  .theme-toggle {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 600px) {
  .club-nav {
    height: 70px;
    padding: 0.8rem 3%;
  }

  .club-mobile {
    top: 70px;
    padding: 1rem;
    gap: 0.2rem;
  }

  .ecostay-home img {
    height: 40px;
  }

  .theme-toggle {
    width: 36px;
    height: 36px;
  }

  .club-hamburger span {
    width: 25px;
  }

  .mobile-section-title {
    font-size: 0.75rem;
  }
}
</style>
