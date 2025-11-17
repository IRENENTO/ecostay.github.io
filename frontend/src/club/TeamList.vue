<template>
  <section id="team" class="section">
    <div class="container">
      <h2>Our Team</h2>
      <div class="team-grid">
        <div v-for="m in team" :key="m.id" class="team-card glass">
          <img :src="m.img" :alt="m.name" />
          <h4>{{ m.name }}</h4>
          <p>{{ m.role }}</p>
          <p v-if="m.location" class="location">{{ m.location }}</p>
          <small v-if="m.focus">{{ m.focus }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { team } from './data.js'
</script>

<style scoped>
.section{ padding:4rem 5% }
.container{ max-width:1000px; margin:0 auto }
.team-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap:1rem }
.team-card{ text-align:center; padding:1.25rem; border-radius:18px }
.team-card img{ width:100px; height:100px; border-radius:50%; border:3px solid #00ff9d; margin-bottom:0.8rem }
.location{ text-transform:uppercase; font-size:0.75rem; letter-spacing:0.2rem; color:rgba(255,255,255,0.7); margin:0.4rem 0 }
small{ display:block; margin-top:0.4rem; opacity:0.85 }
</style>
