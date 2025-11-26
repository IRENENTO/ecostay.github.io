<template>
  <section id="team" class="section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Team</h2>
        <p>Passionate individuals dedicated to sustainable tourism and community development</p>
      </div>
      <div class="team-grid">
        <div v-for="m in team" :key="m.id" class="team-card glass">
          <div class="team-image">
            <img :src="m.img" :alt="m.name" />
          </div>
          <div class="team-details">
            <h4>{{ m.name }}</h4>
            <p class="role">{{ m.role }}</p>
            <p v-if="m.location" class="location">📍 {{ m.location }}</p>
            <div v-if="m.focus" class="focus">
              <span>Focus:</span> {{ m.focus }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Import the team data
import { team as teamData } from './data.js'

// Use a ref to make the team data reactive
const team = ref([])

// Set the team data when the component is mounted
onMounted(() => {
  team.value = teamData || []
  console.log('Team loaded:', team.value)
})
</script>

<style scoped>
.section { 
  padding: 4rem 5%;
  background: #f8fafc;
}

.container { 
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 15px;
}

.section-header { 
  max-width: 700px; 
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

.team-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 2rem;
  margin-top: 2rem;
}

.team-card { 
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  text-align: center;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.team-image {
  margin-bottom: 1.5rem;
}

.team-image img { 
  width: 150px; 
  height: 150px; 
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #38a169;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.team-card h4 {
  font-size: 1.4rem;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.role {
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.location { 
  color: #4a5568;
  font-size: 0.95rem;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.focus {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
}

.focus span {
  font-weight: 600;
  color: #2d3748;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 3rem 5%;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
