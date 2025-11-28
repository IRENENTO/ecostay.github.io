<template>
  <div id="app">
    <ClubNav v-if="$route.path === '/club'" />
    <NavBar v-else />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import ClubNav from './components/ClubNav.vue'
import Footer from './components/footer.vue'

useRoute()
</script>

<style>
/* Reset all margins/paddings */
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body, #app {
  width: 100%;
  overflow-x: hidden;
  background: #000;
  color: white;
}

/* Ensure router-view displays full content */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* NavBar is fixed, so add offset to content */
#app > :nth-child(2) {
  margin-top: 0; /* content starts right after navbar since navbar is fixed */
  flex: 1;
}

/* Footer stays at bottom */
#app > :last-child {
  margin-top: auto;
}

/* All divs, sections visible by default */
div, section, main {
  overflow: visible;
}
</style>
