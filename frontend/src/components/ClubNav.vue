<template>
  <header class="club-nav">
    <div class="club-container">
      <a href="#home" class="club-logo">
        <img src="../assets/logo.png" alt="EcostaStay Club" />
      </a>
      <nav class="club-links">
        <a href="/" class="club-link external">EcostaStay Home</a>
        <a href="#home" class="club-link">Club Home</a>
        <a href="#events" class="club-link">Events</a>
        <a href="#story" class="club-link">Story</a>
        <a href="#team" class="club-link">Team</a>
        <a href="#news" class="club-link">News</a>
        <a href="#contribute" class="club-link cta">Join</a>
      </nav>
      <div class="club-actions">
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
        <a href="/" @click="menuOpen = false">EcostaStay Home</a>
        <a href="#home" @click="menuOpen = false">Club Home</a>
        <a href="#events" @click="menuOpen = false">Events</a>
        <a href="#story" @click="menuOpen = false">Story</a>
        <a href="#team" @click="menuOpen = false">Team</a>
        <a href="#news" @click="menuOpen = false">News</a>
        <a href="#contribute" @click="menuOpen = false" class="cta">Join</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'

const menuOpen = ref(false)
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const toggleBodyScroll = (state) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = state ? 'hidden' : ''
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
  padding: 0.9rem 4%;
  border-bottom: 2px solid #00ff9d;
  transition: background 0.4s ease;
}

.club-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.club-logo img { height: 56px; filter: drop-shadow(0 0 14px #00ff9d); }

.club-links { display:flex; gap:1rem; align-items:center; }

.club-link { color: var(--text-main); text-decoration:none; padding:0.45rem 0.9rem; border-radius:12px; font-weight:700; transition:color 0.3s ease, background 0.3s ease; }
.club-link.external { border:1px solid rgba(0,255,157,0.3); }
.club-link:hover { background: rgba(0,255,157,0.12); color: #00ff9d; }

.club-link.cta { background: #00ff9d; color: black; border-radius: 20px; padding:0.5rem 1rem; box-shadow:0 0 20px rgba(0,255,157,0.25); }

.club-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.theme-toggle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid rgba(0,255,157,0.4);
  background: transparent;
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.club-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
}

.club-hamburger span {
  width: 28px;
  height: 3px;
  background: #00ff9d;
  border-radius: 3px;
}

.club-mobile {
  position: fixed;
  top: 80px; left: 0; right: 0;
  background: rgba(0, 0, 0, 0.95);
  border-top: 1px solid rgba(0,255,157,0.2);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.5rem;
  text-align: center;
}

.club-mobile a {
  color: white;
  text-decoration: none;
  padding: 0.9rem;
  border-radius: 12px;
}

.club-mobile a.cta {
  background: #00ff9d;
  color: #000;
  font-weight: 700;
  margin-top: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 800px) {
  .club-links { display:none; }
  .club-hamburger { display:flex; }
}
</style>
