<template>
  <div class="club-website">
    <!-- Club content built from modular components -->
    <Hero />

    <section id="story" class="section">
      <div class="container story-grid">
        <div class="story-copy">
          <h2>Our Story</h2>
          <p>EcostaStay Club began as a handful of eco-hosts sharing best practices after gorilla treks. Today we’re a nationwide circle of travelers, storytellers, and conservation partners who turn every journey into measurable impact.</p>
          <ul class="story-list">
            <li><strong>500+</strong> climate-positive stays verified since 2025.</li>
            <li><strong>12</strong> partner lodges funded for solar, water and waste upgrades.</li>
            <li><strong>18%</strong> of every booking reinvested into community projects.</li>
          </ul>
        </div>
        <div class="story-media glass">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900" alt="EcostaStay community" />
          <div class="story-metric">
            <span class="metric-number">92%</span>
            <p>of members host or volunteer at least twice a year.</p>
          </div>
          <p class="story-caption">Members leading a reforestation weekend near Nyungwe canopy walk.</p>
        </div>
      </div>
    </section>

    <section id="mission" class="mission-vision">
      <div class="container grid">
        <div class="card glass animate">
          <h3>VISION</h3>
          <p>A Rwanda where every traveler leaves a positive footprint and every host thrives sustainably.</p>
        </div>
        <div class="card glass animate">
          <h3>MISSION</h3>
          <p>Connect, educate, and empower a community of eco-leaders through shared experiences, knowledge, and action.</p>
        </div>
      </div>
    </section>

    <section id="resilience" class="section bg-dark">
      <div class="container resilience-grid">
        <div class="resilience-copy">
          <p class="eyebrow">CLIMATE RESILIENCE</p>
          <h2>We reinvest into nature-based adaptation</h2>
          <p>EcostaStay Club members co-fund bamboo corridors, floating wetlands, and insurance pools that protect communities from droughts or flash floods.</p>
          <ul>
            <li><strong>18%</strong> of booking revenue flows into resilience labs.</li>
            <li><strong>12</strong> watersheds now have early warning sensors maintained by members.</li>
            <li><strong>4</strong> innovation pods test solar cold-chain and blue schools.</li>
          </ul>
        </div>
        <div class="resilience-cards">
          <article class="glass">
            <h4>Regenerative Lodging Index</h4>
            <p>Scorecards track emissions, biodiversity, and community benefits for every stay.</p>
          </article>
          <article class="glass">
            <h4>Community Adaptation Pods</h4>
            <p>Mobile toolkits with tree seedlings, water sensors, and storytelling gear rotate across districts.</p>
          </article>
          <article class="glass">
            <h4>Rapid Response Fund</h4>
            <p>Members pledge volunteer hours or micro-grants within 24h of landslides or storms.</p>
          </article>
        </div>
      </div>
    </section>

    <EventsList />
    <Contribute />
    <TeamList />
    <NewsList />

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
import Contribute from '../club/Contribute.vue'

import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
const { user } = authStore
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.club-website {
  background: var(--bg-main);
  color: var(--text-main);
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  transition: background 0.4s ease, color 0.4s ease;
}

/* NAVBAR */
.club-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: var(--navbar-bg);
  backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 1rem 5%;
  border-bottom: 2px solid #00ff9d;
  transition: background 0.4s ease;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.club-logo img {
  height: 60px;
  filter: drop-shadow(0 0 20px #00ff9d);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #00ff9d;
}

.glow-btn {
  background: #00ff9d;
  color: black;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 30px rgba(0,255,157,0.7);
}

.user-profile img {
  width: 45px; height: 45px;
  border-radius: 50%;
  border: 3px solid #00ff9d;
}

/* HERO SLIDER */
.hero-slider {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: 80px;
}

.slides {
  display: flex;
  width: 300%;
  height: 100%;
  transition: transform 0.8s ease;
}

.slide {
  width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* center the caption on large screens; fall back to bottom on small screens */
.slide-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, rgba(2,10,6,0.75), rgba(0,0,0,0.55));
  padding: 2.25rem 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(0,255,157,0.18);
  box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
  max-width: min(760px, 90%);
  width: auto;
  backdrop-filter: blur(8px) saturate(120%);
  animation: slideInUp 10s ease-out;
  text-align: center;
  color: #fff;
}

/* on small devices keep caption near bottom and full-width */
@media (max-width: 768px) {
  .slide-caption {
    top: auto;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 48px);
    padding: 1rem 1.2rem;
    border-radius: 14px;
    max-width: none;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.caption-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.slide-caption h2 {
  font-size: 2.5rem;
  color: #00ff9d;
  margin: 0.5rem 0;
  text-shadow: 0 0 20px rgba(0, 255, 157, 0.5);
}

.slide-caption p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0 1rem 0;
}

.caption-badge {
  display: inline-block;
  background: linear-gradient(45deg, #00ff9d, #00cc7a);
  color: black;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.6);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,255,157,0.3);
  border: 2px solid #00ff9d;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #00ff9d;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.nav-arrow:hover {
  background: rgba(0,255,157,0.6);
  box-shadow: 0 0 30px rgba(0,255,157,0.8);
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow.left { left: 30px; }
.nav-arrow.right { right: 30px; }

/* SECTIONS */
.section {
  padding: 6rem 5%;
  text-align: center;
  scroll-margin-top: 120px;
  transition: background 0.4s ease, color 0.4s ease;
}

.bg-dark { background: var(--panel-bg); }

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.story-copy {
  text-align: left;
}

.story-copy p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.story-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.story-list li {
  background: rgba(0, 255, 157, 0.08);
  padding: 0.9rem 1.2rem;
  border-radius: 14px;
  border-left: 4px solid #00ff9d;
}

.story-media {
  padding: 1.5rem;
}

.story-media img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.story-metric {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #00ff9d;
}

.story-caption {
  font-size: 0.9rem;
  opacity: 0.75;
}

.resilience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  align-items: stretch;
  text-align: left;
}

.resilience-copy ul {
  list-style: none;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.resilience-copy li {
  background: rgba(0, 255, 157, 0.08);
  border-left: 4px solid #00ff9d;
  padding: 0.8rem 1rem;
  border-radius: 12px;
}

.resilience-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.resilience-cards article {
  padding: 1.2rem 1.5rem;
  border-radius: 18px;
  text-align: left;
}

h2 {
  font-size: 3rem;
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 2px solid var(--card-border);
}

.animate {
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.sessions-grid, .team-grid, .news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.session-card, .team-card, .news-card {
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
}

/* EVENT CARD STYLES */
.event-card {
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 255, 157, 0.3);
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.event-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.event-content h4 {
  font-size: 1.3rem;
  color: #00ff9d;
  margin: 0.5rem 0;
}

.event-date {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.event-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0.8rem 0;
  flex-grow: 1;
}

.event-btn {
  background: linear-gradient(45deg, #00ff9d, #00cc7a);
  color: black;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  align-self: center;
  margin-top: 0.8rem;
}

.event-btn:hover {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.8);
  transform: scale(1.05);
}

.team-card img {
  width: 100px; height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #00ff9d;
}

/* FOOTER */
.club-footer {
  background: var(--bg-main);
  padding: 3rem 5%;
  border-top: 2px solid #00ff9d;
  text-align: center;
  transition: background 0.4s ease, color 0.4s ease;
}

.updates {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: left;
}

.update-item {
  background: rgba(0,255,157,0.1);
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  border-left: 4px solid #00ff9d;
}

.update-item span {
  font-size: 0.8rem;
  color: #00ff9d;
}

/* MOBILE */
@media (max-width: 992px) {
  .nav-links { display: none; }
  .hero-slider { height: 70vh; }
}
</style>