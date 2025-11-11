<template>
  <div class="listing-card">
    <div class="card-header">
      <h3>{{ listing.title }}</h3>
      <span class="green-score">{{ listing.greenScore }}/100</span>
    </div>
    <p class="location"><i class="fas fa-map-marker-alt"></i> {{ listing.location.address }}</p>
    <p class="description">{{ listing.description }}</p>
    <button class="learn-more">Learn More →</button>
  </div>
</template>

<script setup>
const props = defineProps({ listing: Object });
</script>

<style scoped>
.listing-card {
  background: rgba(0, 255, 157, 0.08);
  border: 2px solid rgba(0, 255, 157, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.listing-card:hover {
  background: rgba(0, 255, 157, 0.12);
  border-color: rgba(0, 255, 157, 0.6);
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.3);
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.75rem;
}

h3 {
  color: #00ff9d;
  font-size: 1.2rem;
  margin: 0;
}

.green-score {
  background: #00ff9d;
  color: #000;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
}

.location {
  font-size: 0.9rem;
  opacity: 0.75;
  margin: 0.5rem 0;
  color: #aaa;
}

.description {
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 0.75rem 0;
  line-height: 1.5;
}

.learn-more {
  width: 100%;
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  border: 2px solid #00ff9d;
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1rem;
}

.learn-more:hover {
  background: #00ff9d;
  color: #000;
}
</style>