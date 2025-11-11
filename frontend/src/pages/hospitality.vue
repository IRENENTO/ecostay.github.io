<template>
  <main class="hospitality-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('hospitality.hero_title') || 'Sustainable Accommodations' }}</h1>
        <p class="tagline">{{ $t('hospitality.hero_subtitle') || 'Eco-friendly lodges and hotels for conscious travelers' }}</p>
        <div class="search-bar">
          <input type="text" :placeholder="$t('hospitality.search') || 'Search lodges...'" />
          <button class="glow-btn">{{ $t('hospitality.search_btn') || 'Search' }}</button>
        </div>
      </div>
    </section>

    <!-- LODGE TYPES -->
    <section class="lodge-types container">
      <h2>{{ $t('hospitality.lodge_types') || 'Types of Accommodations' }}</h2>
      <div class="types-grid">
        <div v-for="type in lodgeTypes" :key="type.id" class="type-card glass">
          <div class="type-icon">
            <i :class="type.icon"></i>
          </div>
          <h3>{{ type.title }}</h3>
          <p>{{ type.description }}</p>
          <ul class="amenities">
            <li v-for="amenity in type.amenities" :key="amenity">
              <i class="fas fa-check"></i> {{ amenity }}
            </li>
          </ul>
          <span class="price">From {{ type.price }}/night</span>
        </div>
      </div>
    </section>

    <!-- FEATURED LODGES -->
    <section class="featured-lodges container">
      <h2>{{ $t('hospitality.featured') || 'Featured Eco-Lodges' }}</h2>
      <div class="lodges-grid">
        <div v-for="lodge in featuredLodges" :key="lodge.id" class="lodge-card glass">
          <div class="lodge-header">
            <img :src="lodge.image" :alt="lodge.name" />
            <div class="eco-badge">
              <i class="fas fa-leaf"></i>
              <span>{{ lodge.ecoRating }}</span>
            </div>
          </div>
          <div class="lodge-content">
            <h4>{{ lodge.name }}</h4>
            <p class="location"><i class="fas fa-map-marker-alt"></i> {{ lodge.location }}</p>
            <p class="description">{{ lodge.description }}</p>
            <div class="features">
              <span v-for="feature in lodge.features" :key="feature" class="feature-tag">{{ feature }}</span>
            </div>
            <div class="lodge-footer">
              <span class="rating">
                <i class="fas fa-star"></i> {{ lodge.rating }}/5 ({{ lodge.reviews }} reviews)
              </span>
              <button class="book-btn">{{ $t('hospitality.book') || 'Book Now' }} →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SUSTAINABILITY STANDARDS -->
    <section class="standards">
      <div class="container">
        <h2>{{ $t('hospitality.standards') || 'Our Sustainability Standards' }}</h2>
        <div class="standards-grid">
          <div class="standard-item">
            <div class="standard-icon">
              <i class="fas fa-droplet"></i>
            </div>
            <h4>{{ $t('hospitality.water_conservation') || 'Water Conservation' }}</h4>
            <p>{{ $t('hospitality.water_desc') || 'Rainwater harvesting and efficient systems.' }}</p>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
              <i class="fas fa-sun"></i>
            </div>
            <h4>{{ $t('hospitality.renewable_energy') || 'Renewable Energy' }}</h4>
            <p>{{ $t('hospitality.renewable_desc') || 'Solar power and clean energy solutions.' }}</p>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
              <i class="fas fa-recycle"></i>
            </div>
            <h4>{{ $t('hospitality.waste_management') || 'Waste Management' }}</h4>
            <p>{{ $t('hospitality.waste_desc') || 'Zero waste goals and composting programs.' }}</p>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
              <i class="fas fa-users"></i>
            </div>
            <h4>{{ $t('hospitality.community') || 'Community Engagement' }}</h4>
            <p>{{ $t('hospitality.community_desc') || 'Fair wages and local employment.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING TIERS -->
    <section class="pricing container">
      <h2>{{ $t('hospitality.pricing') || 'Pricing Tiers' }}</h2>
      <div class="pricing-grid">
        <div v-for="tier in pricingTiers" :key="tier.id" class="pricing-card" :class="{ featured: tier.featured }">
          <h3>{{ tier.name }}</h3>
          <p class="price">{{ tier.priceRange }}</p>
          <p class="description">{{ tier.description }}</p>
          <ul class="tier-features">
            <li v-for="feature in tier.features" :key="feature">
              <i class="fas fa-check"></i> {{ feature }}
            </li>
          </ul>
          <button class="tier-btn" :class="{ featured: tier.featured }">{{ $t('hospitality.explore') || 'Explore' }}</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const lodgeTypes = [
  {
    id: 1,
    icon: 'fas fa-mountain',
    title: 'Mountain Eco-Lodges',
    description: 'Immersive nature retreats in pristine mountain settings.',
    amenities: ['WiFi', 'Hot water', 'Local meals', 'Guides'],
    price: '$150'
  },
  {
    id: 2,
    icon: 'fas fa-waves',
    title: 'Lakeside Resorts',
    description: 'Relaxing waterfront experiences with water activities.',
    amenities: ['Beach access', 'Water sports', 'Restaurant', 'Spa'],
    price: '$120'
  },
  {
    id: 3,
    icon: 'fas fa-tree',
    title: 'Jungle Cabins',
    description: 'Intimate forest stays with minimal environmental impact.',
    amenities: ['Eco-design', 'Solar power', 'Local guides', 'Photography'],
    price: '$100'
  },
  {
    id: 4,
    icon: 'fas fa-home',
    title: 'Family Compounds',
    description: 'Spacious accommodations perfect for groups.',
    amenities: ['Kitchen', 'Multiple rooms', 'Communal spaces', 'Workshops'],
    price: '$200'
  }
]

const featuredLodges = [
  {
    id: 1,
    name: 'Nyungwe Eco-Lodge',
    location: 'Nyungwe Forest National Park',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
    description: 'Luxury eco-lodge suspended above the rainforest canopy.',
    ecoRating: 'A+',
    rating: 4.9,
    reviews: 128,
    features: ['Canopy views', 'Solar power', 'Organic meals', 'Guided hikes']
  },
  {
    id: 2,
    name: 'Lake Kivu Retreat',
    location: 'Gisenyi, Lake Kivu',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
    description: 'Sustainable lakeside bungalows with water activities.',
    ecoRating: 'A',
    rating: 4.7,
    reviews: 95,
    features: ['Sunset views', 'Kayaking', 'Beach access', 'Farm-to-table']
  },
  {
    id: 3,
    name: 'Volcanoes Base Camp',
    location: 'Volcanoes National Park',
    image: 'https://images.unsplash.com/photo-1506905925346-500dc1b1252d?w=500',
    description: 'Eco-camp with stunning volcanic views for adventure seekers.',
    ecoRating: 'A+',
    rating: 4.8,
    reviews: 156,
    features: ['Park proximity', 'Expert guides', 'Hot meals', 'Bonfire gathering']
  }
]

const pricingTiers = [
  {
    id: 1,
    name: 'Budget Eco-Stay',
    priceRange: '$80 - $120/night',
    description: 'Comfortable and sustainable on a budget.',
    features: ['Shared facilities', 'Basic amenities', 'WiFi', 'Community meals'],
    featured: false
  },
  {
    id: 2,
    name: 'Comfort Retreat',
    priceRange: '$120 - $180/night',
    description: 'Premium comfort with eco-consciousness.',
    features: ['Private room', 'En-suite bathroom', 'Meals included', 'Activities included'],
    featured: true
  },
  {
    id: 3,
    name: 'Luxury Escape',
    priceRange: '$200 - $350+/night',
    description: 'Ultimate eco-luxury experience.',
    features: ['Suites with views', 'All meals', 'Spa access', 'Personal guide', 'Premium amenities'],
    featured: false
  }
]
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.hospitality-page {
  background: #000;
  color: white;
  font-family: 'Poppins', sans-serif;
}

/* HERO */
.hero {
  background: linear-gradient(135deg, #001a0f 0%, #000 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  margin-top: 80px;
  text-align: center;
}

.hero-content {
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

.search-bar {
  display: flex;
  gap: 0.75rem;
  max-width: 500px;
  margin: 0 auto;
}

.search-bar input {
  flex: 1;
  padding: 1rem;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* LODGE TYPES */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.lodge-types {
  padding: 6rem 1.5rem;
}

.lodge-types h2,
.featured-lodges h2,
.standards h2,
.pricing h2 {
  font-size: 2.5rem;
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  text-align: center;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.type-card {
  background: rgba(0, 255, 157, 0.05);
  border: 2px solid rgba(0, 255, 157, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: 0.3s;
}

.type-card:hover {
  border-color: #00ff9d;
  box-shadow: 0 0 40px rgba(0, 255, 157, 0.2);
  transform: translateY(-8px);
}

.type-icon {
  font-size: 3rem;
  color: #00ff9d;
  margin-bottom: 1rem;
}

.type-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.amenities {
  list-style: none;
  text-align: left;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}

.amenities li {
  padding: 0.4rem 0;
  opacity: 0.8;
}

.amenities i {
  color: #00ff9d;
  margin-right: 0.5rem;
}

.price {
  display: block;
  background: rgba(0, 255, 157, 0.15);
  color: #00ff9d;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;
}

/* FEATURED LODGES */
.featured-lodges {
  padding: 6rem 1.5rem;
  background: #001a0f;
}

.lodges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.lodge-card {
  background: rgba(0, 255, 157, 0.05);
  border: 2px solid rgba(0, 255, 157, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s;
}

.lodge-card:hover {
  border-color: #00ff9d;
  box-shadow: 0 0 40px rgba(0, 255, 157, 0.25);
}

.lodge-header {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.lodge-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.eco-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 255, 157, 0.9);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lodge-content {
  padding: 1.5rem;
}

.lodge-card h4 {
  color: #00ff9d;
  font-size: 1.25rem;
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

.features {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.feature-tag {
  background: rgba(0, 255, 157, 0.15);
  color: #00ff9d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.lodge-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 157, 0.1);
}

.rating {
  font-size: 0.9rem;
  opacity: 0.8;
}

.rating i {
  color: #ffd700;
  margin-right: 0.3rem;
}

.book-btn {
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  border: 2px solid #00ff9d;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.book-btn:hover {
  background: #00ff9d;
  color: #000;
}

/* SUSTAINABILITY STANDARDS */
.standards {
  padding: 6rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 255, 157, 0.08), rgba(0, 0, 0, 0.6));
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.standard-item {
  background: rgba(0, 255, 157, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 157, 0.15);
  text-align: center;
  transition: 0.3s;
}

.standard-item:hover {
  border-color: #00ff9d;
  box-shadow: 0 0 30px rgba(0, 255, 157, 0.2);
}

.standard-icon {
  font-size: 2.5rem;
  color: #00ff9d;
  margin-bottom: 1rem;
}

.standard-item h4 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.standard-item p {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* PRICING */
.pricing {
  padding: 6rem 1.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: rgba(0, 255, 157, 0.05);
  border: 2px solid rgba(0, 255, 157, 0.2);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
}

.pricing-card.featured {
  background: rgba(0, 255, 157, 0.12);
  border-color: #00ff9d;
  transform: scale(1.05);
}

.pricing-card h3 {
  font-size: 1.3rem;
  color: #00ff9d;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #00ff9d;
  margin-bottom: 0.5rem;
}

.pricing-card .description {
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.tier-features {
  list-style: none;
  text-align: left;
  margin-bottom: 1.5rem;
}

.tier-features li {
  padding: 0.5rem 0;
  opacity: 0.85;
}

.tier-features i {
  color: #00ff9d;
  margin-right: 0.5rem;
}

.tier-btn {
  width: 100%;
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  border: 2px solid #00ff9d;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.tier-btn.featured {
  background: #00ff9d;
  color: #000;
}

.tier-btn:hover {
  background: #00ff9d;
  color: #000;
}

/* MOBILE */
@media (max-width: 900px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .pricing-card.featured {
    transform: scale(1);
  }

  .search-bar {
    flex-direction: column;
  }
}
</style>