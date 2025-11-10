<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* THIS IS THE MOST IMPORTANT FIX IN RWANDA TODAY */
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body, #app {
  height: 100%;
  width: 100%;
  overflow-x: hidden !important;
  background: #000 !important;
  color: white;
}

/* FORCE ROUTER-VIEW TO BE VISIBLE */
#app > div {
  display: block !important;
  min-height: 100vh !important;
  padding-top: 120px !important; /* CLEAR NAVBAR */
  position: relative !important;
  z-index: 1 !important;
}

/* KILL ANY HIDDEN OVERFLOW */
div, section, main, .home-page {
  overflow: visible !important;
}
</style>