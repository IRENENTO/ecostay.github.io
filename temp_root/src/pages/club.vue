<template>
  <div class="club-website">
    <!-- Hero Section with Carousel -->
    <Hero />

    <!-- Story Section -->
    <section id="story" class="section">
      <div class="container">
        <h2>Our Story</h2>
        <div class="about-content">
          <div class="about-text">
            <p>Welcome to EcoStay Club, a community dedicated to sustainable tourism and creating positive change through collective action and shared values. Our mission is to empower travelers and hosts to build a better future together.</p>
            <p>Since our founding, we've grown from a small group of passionate individuals to a thriving community of changemakers across Rwanda, dedicated to eco-conscious travel and community development.</p>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Community gathering" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="section bg-light">
      <div class="container grid">
        <div class="card">
          <h3>🎯 MISSION</h3>
          <p>Connect, educate, and empower a community of eco-leaders through shared experiences, knowledge, and action.</p>
        </div>
        <div class="card">
          <h3>🌍 VISION</h3>
          <p>A Rwanda where every traveler leaves a positive footprint and every host thrives sustainably.</p>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <EventsList />

    <!-- Team Section -->
    <TeamList />

    <!-- News Section -->
    <NewsList />

    <!-- Join Section -->
    <Join />

    <!-- Contribute / Donation Section -->
    <Contribute />

    <!-- FOOTER UPDATES -->
    <footer class="club-footer">
      <div class="container">
        <div class="updates">
          <h3>Latest Updates</h3>
          <div class="update-item">
            <p><strong>Admin:</strong> New gorilla permits available – limited spots!</p>
            <span>2 hours ago</span>
          </div>
          <div class="update-item">
            <p><strong>Member Upload:</strong> John shared 12 new photos from Nyungwe</p>
            <span>5 hours ago</span>
          </div>
        </div>
        <p>&copy; 2025 EcostaStay Club – Rwanda's Eco Family</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Hero from '../club/Hero.vue'
import EventsList from '../club/EventsList.vue'
import TeamList from '../club/TeamList.vue'
import NewsList from '../club/NewsList.vue'
import Join from '../club/Join.vue'
import Contribute from '../club/Contribute.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 6rem 5%;
  scroll-margin-top: 80px;
}

.bg-light {
  background-color: #f8f9fa;
}

.bg-dark {
  background-color: #1a1a2e;
  color: white;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
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

/* Story Section */
.about-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  text-align: left;
}

.about-text {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
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

/* Mission/Vision Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 3rem auto 0;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #00a651;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.card p {
  color: #666;
  line-height: 1.7;
}

.bg-light .card {
  background: rgba(255, 255, 255, 0.7);
}

/* Footer */
.club-footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 5%;
  text-align: center;
}

.club-footer .updates {
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.club-footer h3 {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.update-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: left;
}

.update-item p {
  margin: 0;
  font-size: 0.95rem;
}

.update-item span {
  color: #aaa;
  font-size: 0.85rem;
  display: block;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 2rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2rem;
  }

  .section {
    padding: 4rem 5%;
  }
}
</style>
