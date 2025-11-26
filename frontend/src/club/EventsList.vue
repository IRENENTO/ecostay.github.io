<template>
  <section id="events" class="section">
    <div class="container">
      <div class="section-header">
        <h2>Upcoming Sessions & Events</h2>
        <p>Retreats, workshops, and conservation field trips curated for EcostaStay members.</p>
      </div>
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
import { ref, onMounted } from 'vue'

// Import the events data
import { events as eventsData } from './data.js'

// Use a ref to make the events reactive
const events = ref([])

// Set the events when the component is mounted
onMounted(() => {
  events.value = eventsData || []
  console.log('Events loaded:', events.value)
})
</script>

<style scoped>
.section { 
  padding: 4rem 5%;
  background: #f5f7fa;
}

.container { 
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 15px;
}

.section-header { 
  max-width: 800px; 
  margin: 0 auto 3rem; 
  text-align: center;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.6;
}

.sessions-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 2rem;
  margin-top: 2rem;
}

.event-card { 
  overflow: hidden; 
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.event-image { 
  width: 100%; 
  height: 220px; 
  object-fit: cover;
  border-bottom: 1px solid #e2e8f0;
}

.event-content { 
  padding: 1.5rem;
}

event-content h4 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.event-date { 
  color: #4a5568;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.event-desc {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.event-btn {
  background: #38a169;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.9rem;
}

.event-btn:hover {
  background: #2f855a;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 3rem 5%;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .sessions-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
