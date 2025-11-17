<template>
  <div id="app">
    <!-- Render ClubNav for /club routes, otherwise global NavBar -->
    <component :is="isClub ? ClubNav : NavBar" />

    <!-- Page Content -->
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import NavBar from './components/NavBar.vue'
import ClubNav from './components/ClubNav.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Match /club EXACT or any nested routes: /club/..., /club/events, etc.
const isClub = computed(() => route.path && route.path.startsWith('/club'))
</script>

<style>
/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global background + text color */
html, body, #app {
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: white;
  overflow-x: hidden;
}

/* Ensure layout uses full height */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* router-view pushes content under fixed navbar automatically */
#app > :nth-child(2) {
  flex: 1;
  margin-top: 0;
}

/* Footer always remains at bottom */
#app > :last-child {
  margin-top: auto;
}

/* Make all content visible by default */
div, section, main {
  overflow: visible;
}
</style>
