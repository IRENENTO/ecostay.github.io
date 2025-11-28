<template>
  <main class="home-hero">
    <section class="hero">
      <div class="hero-inner container">
        <div class="hero-left">
          <img src="../assets/logo.png" alt="EcostaStay" class="hero-logo" />
          <h1>{{$t('home.hero')}}</h1>
          <p class="tagline">{{$t('home.sub')}}</p>

          <form class="search-bar" @submit.prevent>
            <input type="text" :placeholder="$t('home.search')" />
            <button class="glow-btn">{{$t('home.explore')}}</button>
          </form>
        </div>
        <div class="hero-right">
          <!-- small feature area / CTA graphic -->
          <div class="feature-box">
            <h3>Featured this month</h3>
            <p>Top eco-lodges with high green scores and community impact.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured container">
      <h2>{{$t('home.featured')}}</h2>
      <div class="cards">
        <ListingCard v-for="(l, i) in listings" :key="i" :listing="l" />
      </div>
    </section>

    <section class="how container">
      <h2>{{$t('home.how_title')}}</h2>
      <div class="steps">
        <div class="step">
          <i class="fas fa-search"></i>
          <h4>{{$t('home.steps.find.title')}}</h4>
          <p>{{$t('home.steps.find.desc')}}</p>
        </div>
        <div class="step">
          <i class="fas fa-hand-holding-heart"></i>
          <h4>{{$t('home.steps.book.title')}}</h4>
          <p>{{$t('home.steps.book.desc')}}</p>
        </div>
        <div class="step">
          <i class="fas fa-seedling"></i>
          <h4>{{$t('home.steps.impact.title')}}</h4>
          <p>{{$t('home.steps.impact.desc')}}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ListingCard from '../components/ListingCard.vue'

const listings = [
  {
    title: 'Nyungwe Eco-Lodge',
    location: { address: 'Nyungwe Forest National Park' },
    description: 'A remote eco-lodge with canopy walks and community-led tours.',
    greenScore: 92
  },
  {
    title: 'Lake Kivu Retreat',
    location: { address: 'Gisenyi, Lake Kivu' },
    description: 'Sustainable lakeside bungalows with solar power and permaculture gardens.',
    greenScore: 88
  },
  {
    title: 'Volcanoes Eco-Camp',
    location: { address: 'Volcanoes National Park' },
    description: 'Basecamp for gorilla treks with low-impact accommodation.',
    greenScore: 95
  }
]
</script>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.home-hero { background: linear-gradient(135deg,#001a0f,#000); color: #fff; width: 100%; min-height: 100vh; position: relative; z-index: 1; }
.hero { padding: 6rem 2rem; margin: 0; }
.hero-inner { display: flex; gap: 2rem; align-items: center; }
.hero-left { flex: 1; }
.hero-right { flex: 1; display:flex; justify-content:flex-end; }
.hero-logo { height: 110px; filter: drop-shadow(0 0 30px rgba(0,255,157,0.8)); }
h1 { font-size: 2.25rem; margin: 1rem 0; background: linear-gradient(90deg,#00ff9d,#00cc7a); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
.tagline { opacity: 0.85; max-width: 40rem; }
.search-bar { display:flex; gap:0.75rem; margin-top:1.25rem; }
.search-bar input { flex:1; padding:0.9rem 1rem; border-radius: 999px; border: none; background: rgba(255,255,255,0.08); color:#fff }
.glow-btn { padding:0.8rem 1.5rem; border-radius: 999px; }
.feature-box { background: rgba(0,255,157,0.06); padding: 2rem; border-radius: 16px; border: 1px solid rgba(0,255,157,0.08); }
.featured { padding: 3rem 1.5rem; margin: 0; }
.cards { display:grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap:1.25rem; margin: 2rem 0; }
.how { padding: 3rem 1.5rem 6rem; margin: 0; }
.steps { display:flex; gap:1.5rem; flex-wrap:wrap; }
.step { flex:1; min-width:180px; background: rgba(255,255,255,0.02); padding:1.5rem; border-radius:12px; text-align:center }
.step i { font-size:1.8rem; color:#00ff9d; margin-bottom:0.5rem }

@media (max-width: 900px) {
  .hero-inner { flex-direction:column; text-align:center }
  .hero-right { order: -1 }
}
</style>