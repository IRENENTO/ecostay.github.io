<template>
  <main class="tourism-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('tourism.hero_title') || 'Explore Rwanda\'s Natural Wonders' }}</h1>
        <p class="tagline">{{ $t('tourism.hero_subtitle') || 'Sustainable adventures for eco-conscious travelers' }}</p>
        <button class="glow-btn">{{ $t('tourism.cta') || 'Plan Your Trip' }}</button>
      </div>
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800" alt="Rwanda Gorillas" />
      </div>
    </section>

    <!-- FEATURED DESTINATIONS -->
    <section class="destinations container">
      <h2>{{ $t('tourism.featured') || 'Featured Destinations' }}</h2>
      <div class="dest-grid">
        <div v-for="dest in destinations" :key="dest.id" class="dest-card glass">
          <img :src="dest.image" :alt="dest.title" />
          <div class="dest-content">
            <h3>{{ dest.title }}</h3>
            <p class="location"><i class="fas fa-map-marker-alt"></i> {{ dest.location }}</p>
            <p class="description">{{ dest.description }}</p>
            <div class="activities">
              <span v-for="activity in dest.activities" :key="activity" class="activity-tag">{{ activity }}</span>
            </div>
            <button class="learn-btn">{{ $t('tourism.learn_more') || 'Learn More' }} →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCES -->
    <section class="experiences container">
      <h2>{{ $t('tourism.experiences') || 'Curated Experiences' }}</h2>
      <div class="exp-grid">
        <div v-for="exp in experiences" :key="exp.id" class="exp-card">
          <div class="icon">
            <i :class="exp.icon"></i>
          </div>
          <h4>{{ exp.title }}</h4>
          <p>{{ exp.description }}</p>
          <span class="duration">{{ exp.duration }}</span>
        </div>
      </div>
    </section>

    <!-- IMPACT SECTION -->
    <section class="impact">
      <div class="container">
        <h2>{{ $t('tourism.impact') || 'Your Impact Matters' }}</h2>
        <div class="impact-grid">
          <div class="impact-card">
            <div class="metric">92%</div>
            <p>{{ $t('tourism.impact_conservation') || 'Proceeds Support Conservation' }}</p>
          </div>
          <div class="impact-card">
            <div class="metric">500+</div>
            <p>{{ $t('tourism.impact_community') || 'Local Jobs Created' }}</p>
          </div>
          <div class="impact-card">
            <div class="metric">15K+</div>
            <p>{{ $t('tourism.impact_protected') || 'Hectares Protected' }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const destinations = [
  {
    id: 1,
    title: 'Gorilla Trekking',
    location: 'Volcanoes National Park',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330127b61?w=500',
    description: 'Experience mountain gorillas in their natural habitat with expert guides.',
    activities: ['Wildlife', 'Trekking', '3-4 hours']
  },
  {
    id: 2,
    title: 'Lake Kivu Adventure',
    location: 'Gisenyi',
    image: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500',
    description: 'Water sports, kayaking, and relaxation on Africa\'s freshwater lake.',
    activities: ['Water Sports', 'Relaxation', 'Beach']
  },
  {
    id: 3,
    title: 'Nyungwe Canopy Walk',
    location: 'Nyungwe Forest',
    image: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500',
    description: 'Walk above the rainforest canopy on suspended bridges.',
    activities: ['Adventure', 'Nature', 'Photography']
  },
  {
    id: 4,
    title: 'Akagera Safari',
    location: 'Akagera National Park',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500',
    description: 'Big Five safari experience in Rwanda\'s premier national park.',
    activities: ['Safari', 'Wildlife', 'Jeep Tour']
  }
]

const experiences = [
  {
    id: 1,
    icon: 'fas fa-mountain',
    title: 'Hiking & Trekking',
    description: 'Multi-day treks through lush valleys and volcanic peaks.',
    duration: '2-7 days'
  },
  {
    id: 2,
    icon: 'fas fa-users',
    title: 'Cultural Immersion',
    description: 'Connect with local communities and learn traditional crafts.',
    duration: '1-3 days'
  },
  {
    id: 3,
    icon: 'fas fa-camera',
    title: 'Photography Tours',
    description: 'Capture Rwanda\'s stunning landscapes and wildlife.',
    duration: '3-5 days'
  },
  {
    id: 4,
    icon: 'fas fa-leaf',
    title: 'Eco-Workshops',
    description: 'Learn about conservation and sustainable practices.',
    duration: '1-2 days'
  }
]
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.tourism-page {
  background: var(--bg-main);
  color: var(--text-main);
  font-family: 'Poppins', sans-serif;
  transition: background 0.4s ease, color 0.4s ease;
}

/* HERO */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  margin-top: 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tagline {
  font-size: 1.3rem;
  opacity: 0.85;
  margin-bottom: 2rem;
}

/* DESTINATIONS */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.destinations {
  padding: 6rem 1.5rem;
}

.destinations h2,
.experiences h2 {
  font-size: 2.5rem;
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  text-align: center;
}

.dest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.dest-card {
  background: var(--panel-bg);
  border: 2px solid var(--card-border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dest-card:hover {
  border-color: rgba(0, 255, 157, 0.6);
  box-shadow: 0 0 40px rgba(0, 255, 157, 0.2);
  transform: translateY(-8px);
}

.dest-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.dest-content {
  padding: 1.5rem;
}

.dest-card h3 {
  color: #00ff9d;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0.75rem;
}

.description {
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.activities {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.activity-tag {
  background: rgba(0, 255, 157, 0.15);
  color: #00ff9d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.learn-btn {
  width: 100%;
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  border: 2px solid #00ff9d;
  padding: 0.7rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.learn-btn:hover {
  background: #00ff9d;
  color: #000;
}

/* EXPERIENCES */
.experiences {
  padding: 6rem 1.5rem;
  background: #001a0f;
}

.exp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.exp-card {
  background: var(--panel-bg);
  border: 2px solid var(--card-border);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
}

.exp-card:hover {
  border-color: #00ff9d;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.3);
}

.icon {
  font-size: 2.5rem;
  color: #00ff9d;
  margin-bottom: 1rem;
}

.exp-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.exp-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.duration {
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
}

/* IMPACT */
.impact {
  background: linear-gradient(135deg, rgba(0, 255, 157, 0.1), rgba(0, 0, 0, 0.5));
  padding: 6rem 1.5rem;
  text-align: center;
}

.impact h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.impact-card {
  background: var(--panel-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--card-border);
}

.metric {
  font-size: 2.5rem;
  color: #00ff9d;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.impact-card p {
  opacity: 0.85;
}

/* MOBILE */
@media (max-width: 900px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .destinations h2,
  .experiences h2 {
    font-size: 1.8rem;
  }

  .dest-grid,
  .exp-grid {
    grid-template-columns: 1fr;
  }
}
</style>