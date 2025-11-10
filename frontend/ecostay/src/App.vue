<!-- src/App.vue -->
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
#app {
  font-family: 'Poppins', sans-serif;
  background: #f8f9fa;
}
</style>