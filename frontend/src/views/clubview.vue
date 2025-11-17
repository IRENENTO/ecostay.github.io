<template>
    <div class="ecostay-club-section">
      <!-- We reuse ALL your beautiful components -->
      <Hero />
      
      <section id="story" class="section">
        <div class="container">
          <h2>Our Story</h2>
          <p>EcostaStay Club was born from a vision to connect eco-conscious travelers and hosts in Rwanda. Since 2025, we've built a family of 500+ members who believe in sustainable luxury.</p>
        </div>
      </section>
  
      <section class="mission-vision section">
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
  
      <EventsList />
      <Contribute />
      <TeamList />
      <NewsList />
  
      <!-- Footer -->
      <footer class="club-footer">
        <div class="container">
          <div class="updates">
            <h3>Latest Updates</h3>
            <div class="update-item">
              <p><strong>Admin:</strong> New gorilla permits available – limited spots!</p>
              <span>2 hours ago</span>
            </div>
            <div class="update-item">
              <p><strong>Member:</strong> Aline shared her Lake Kivu retreat photos</p>
              <span>6 hours ago</span>
            </div>
          </div>
          <p>© 2025 EcoStay Club – Part of the EcoStay Rwanda Family</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import Hero from '@/components/club/Hero.vue'
  import EventsList from '@/components/club/EventsList.vue'
  import TeamList from '@/components/club/TeamList.vue'
  import NewsList from '@/components/club/NewsList.vue'
  import Contribute from '@/components/club/Contribute.vue'
  </script>
  
  <style scoped>
  .ecostay-club-section {
    background: #000;
    color: white;
    min-height: 100vh;
  }
  
  /* Reuse your exact original styles – just add this tiny fix so it doesn't fight with main layout */
  .section { padding: 6rem 5%; text-align: center; }
  .container { max-width: 1200px; margin: 0 auto; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap: 2rem; }
  
  h2 {
    font-size: 3rem;
    background: linear-gradient(90deg, #00ff9d, #00cc7a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
  }
  
  /* All other styles (glass, animate, cards, footer, etc.) come from your component files */
  </style>