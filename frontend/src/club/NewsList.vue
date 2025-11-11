<template>
  <section id="news" class="section bg-dark">
    <div class="container">
      <h2>Latest News</h2>
      <div class="news-grid">
        <div v-for="n in news" :key="n.id" class="news-card glass">
          <h4>{{ n.title }}</h4>
          <p>{{ n.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { news } from './data.js'
</script>

<style scoped>
.section{ padding:4rem 5% }
.container{ max-width:1100px; margin:0 auto }
.news-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:1rem }
.news-card{ padding:1rem; border-radius:12px }
</style>
