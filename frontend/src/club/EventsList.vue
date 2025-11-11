<template>
  <section id="sessions" class="section">
    <div class="container">
      <h2>Upcoming Sessions & Events</h2>
      <div class="sessions-grid">
        <div v-for="e in events" :key="e.id" class="event-card glass">
          <img :src="e.img" :alt="e.title" class="event-image" />
          <div class="event-content">
            <h4>{{ e.title }}</h4>
            <p class="event-date">{{ e.date }} | {{ e.location }}</p>
            <p class="event-desc">{{ e.desc }}</p>
            <button class="event-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { events } from './data.js'
</script>

<style scoped>
.section { padding: 4rem 5% }
.container { max-width:1100px; margin:0 auto }
.sessions-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap:1.2rem }
.event-card{ overflow:hidden; border-radius:12px }
.event-image{ width:100%; height:220px; object-fit:cover }
.event-content{ padding:1rem; background:rgba(0,0,0,0.45); }
.event-date{ color:#fff; font-weight:700 }
</style>
