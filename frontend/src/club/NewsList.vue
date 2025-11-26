<template>
  <section id="news" class="section">
    <div class="container">
      <div class="section-header">
        <h2>Latest News & Updates</h2>
        <p>Stay informed about our latest initiatives, partnerships, and community highlights</p>
      </div>
      <div class="news-grid">
        <div v-for="n in news" :key="n.id" class="news-card glass">
          <div class="news-content">
            <h4>{{ n.title }}</h4>
            <p class="news-body">{{ n.body }}</p>
            <div class="news-meta">
              <span class="news-date">Nov 24, 2025</span>
              <a href="#" class="read-more">Read more →</a>
            </div>
          </div>
        </div>
        
        <!-- Additional news placeholder -->
        <div class="news-card glass">
          <div class="news-content">
            <h4>🌍 Sustainable Tourism Summit 2025</h4>
            <p class="news-body">Join us for the annual summit on sustainable tourism practices and innovations in Rwanda.</p>
            <div class="news-meta">
              <span class="news-date">Coming Soon</span>
              <a href="#" class="read-more">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Import the news data
import { news as newsData } from './data.js'

// Use a ref to make the news data reactive
const news = ref([])

// Set the news data when the component is mounted
onMounted(() => {
  news.value = newsData || []
  console.log('News loaded:', news.value)
})
</script>

<style scoped>
.section { 
  padding: 4rem 5%;
  background: #f0f4f8;
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

.news-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 1.5rem;
  margin-top: 2rem;
}

.news-card { 
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.news-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-card h4 {
  font-size: 1.3rem;
  color: #2d3748;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.news-body {
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.news-date {
  font-size: 0.85rem;
  color: #718096;
}

.read-more {
  color: #38a169;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.read-more:hover {
  color: #2f855a;
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 3rem 5%;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
