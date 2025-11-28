<template>
  <div class="ecoclub">
    <EcoStayNav />
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>EcoStay Club</h1>
        <p class="subtitle">Sustainable Stays, Lasting Impact</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1K+</span>
            <span class="stat-label">Members</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Eco Stays</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">12</span>
            <span class="stat-label">Destinations</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2>About EcoStay Club</h2>
        <div class="about-content">
          <div class="about-text">
            <p>Welcome to EcoStay Club, where responsible travel meets sustainable living. We're on a mission to transform the way people experience Rwanda by connecting them with eco-conscious accommodations and meaningful experiences.</p>
            <p>Since our founding, we've been committed to promoting sustainable tourism that benefits both travelers and local communities.</p>
            <div class="mission-vision">
              <div class="mission-box">
                <h3>Our Mission</h3>
                <p>To create a network of sustainable accommodations that prioritize environmental conservation and community development.</p>
              </div>
              <div class="vision-box">
                <h3>Our Vision</h3>
                <p>A world where travel leaves a positive impact on both the environment and local communities.</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?w=800" alt="Eco-friendly accommodation" />
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section id="impact" class="section bg-light">
      <div class="container">
        <h2>Our Impact</h2>
        <div class="impact-grid">
          <div class="impact-card">
            <div class="impact-icon">🌱</div>
            <h3>Sustainable Stays</h3>
            <p>50+ eco-certified accommodations across Rwanda</p>
          </div>
          <div class="impact-card">
            <div class="impact-icon">💧</div>
            <h3>Water Conservation</h3>
            <p>5 million+ liters of water saved annually</p>
          </div>
          <div class="impact-card">
            <div class="impact-icon">🌍</div>
            <h3>Carbon Footprint</h3>
            <p>30% reduction in carbon emissions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stays Section -->
    <section id="stays" class="section">
      <div class="container">
        <h2>Featured Eco Stays</h2>
        <div class="stays-grid">
          <div v-for="stay in featuredStays" :key="stay.id" class="stay-card">
            <img :src="stay.image" :alt="stay.name" class="stay-image" />
            <div class="stay-details">
              <h3>{{ stay.name }}</h3>
              <p class="location">📍 {{ stay.location }}</p>
              <div class="eco-features">
                <span v-for="feature in stay.features" :key="feature" class="eco-tag">{{ feature }}</span>
              </div>
              <p class="description">{{ stay.description }}</p>
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EcoStayNav from '@/components/EcoStayNav.vue';

const featuredStays = ref([
  {
    id: 1,
    name: 'Mountain Eco Lodge',
    location: 'Musanze, Rwanda',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    features: ['Solar Power', 'Organic Garden', 'Water Recycling'],
    description: 'Nestled in the foothills of the Virunga Mountains, our eco lodge offers sustainable luxury with breathtaking views.'
  },
  {
    id: 2,
    name: 'Lakeside Retreat',
    location: 'Lake Kivu, Rwanda',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    features: ['Plastic-Free', 'Local Materials', 'Community Support'],
    description: 'Experience sustainable lakeside living with our eco-friendly bungalows and community-focused tourism.'
  },
  {
    id: 3,
    name: 'Jungle Eco Camp',
    location: 'Nyungwe Forest, Rwanda',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    features: ['Wildlife Conservation', 'Zero Waste', 'Eco Tours'],
    description: 'Immerse yourself in nature while supporting conservation efforts in one of Africa\'s oldest rainforests.'
  }
]);
</script>

<style scoped>
.ecoclub {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?w=1600') no-repeat center center/cover;
  color: white;
  padding: 100px 20px;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  min-width: 180px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Section Styling */
.section {
  padding: 6rem 5%;
  text-align: center;
  scroll-margin-top: 80px;
}

.bg-light {
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #00a651;
  border-radius: 2px;
}

/* About Section */
.about-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  text-align: left;
}

.about-text {
  flex: 1;
}

.about-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.mission-box,
.vision-box {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: left;
}

.mission-box h3,
.vision-box h3 {
  color: #00a651;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.mission-box h3::after,
.vision-box h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #00a651;
}

/* Impact Section */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.impact-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.impact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.impact-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

/* Stays Section */
.stays-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stay-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.stay-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.stay-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.stay-details {
  padding: 1.5rem;
  text-align: left;
}

.stay-details h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.eco-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.eco-tag {
  background: #e8f5e9;
  color: #00a651;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

.description {
  color: #555;
  margin: 1rem 0;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: #00a651;
  color: white;
}

.btn-primary:hover {
  background: #008f45;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 166, 81, 0.3);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-image {
    margin-top: 2rem;
    max-width: 100%;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .stat-item {
    width: 100%;
    max-width: 250px;
  }
  
  .mission-vision {
    grid-template-columns: 1fr;
  }
  
  .stays-grid {
    grid-template-columns: 1fr;
  }
}
</style>
