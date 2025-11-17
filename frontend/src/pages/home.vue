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

    <section class="climate container glass">
      <div class="climate-copy">
        <p class="eyebrow">SUSTAINABLE CLIMATE RESILIENCE</p>
        <h2>Travel that funds carbon-smart communities</h2>
        <p>Each booking dedicates 18% to resilience funds covering reforestation, solar upgrades, youth training, and rapid response after floods or droughts.</p>
        <div class="climate-stats">
          <div>
            <span>38</span>
            <small>climate pilots launched</small>
          </div>
            <div>
            <span>1.8K</span>
            <small>families insured</small>
          </div>
          <div>
            <span>72%</span>
            <small>menu sourced from regenerative farms</small>
          </div>
        </div>
        <router-link to="/climate" class="glow-btn compact">See resilience roadmap</router-link>
      </div>
      <div class="climate-list">
        <article>
          <h4>Heat-ready lodging</h4>
          <p>Passive cooling retrofits and smart meters keep energy use low even during heatwaves.</p>
        </article>
        <article>
          <h4>Blue & green corridors</h4>
          <p>Wetland stewardship and bamboo buffers protect Lake Kivu and Volcanoes National Park from erosion.</p>
        </article>
        <article>
          <h4>Community risk shields</h4>
          <p>Resilience micro-grants, weather insurance, and digital wallets keep host income stable.</p>
        </article>
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
.home-hero { background: var(--bg-main); color: var(--text-main); width: 100%; min-height: 100vh; position: relative; z-index: 1; transition: background 0.4s ease, color 0.4s ease; }
.home-hero::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,rgba(0,26,15,0.65),rgba(0,0,0,0.75));
  pointer-events:none;
  opacity: var(--hero-overlay,1);
}
[data-theme='light'] .home-hero::before{
  background:linear-gradient(135deg,rgba(255,255,255,0.8),rgba(203,245,228,0.9));
}
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
.feature-box { background: var(--panel-bg); padding: 2rem; border-radius: 16px; border: 1px solid var(--card-border); }
.featured { padding: 3rem 1.5rem; margin: 0; }
.cards { display:grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap:1.25rem; margin: 2rem 0; }
.how { padding: 3rem 1.5rem 6rem; margin: 0; }
.steps { display:flex; gap:1.5rem; flex-wrap:wrap; }
.step { flex:1; min-width:180px; background: rgba(255,255,255,0.02); padding:1.5rem; border-radius:12px; text-align:center }
.step i { font-size:1.8rem; color:#00ff9d; margin-bottom:0.5rem }
.climate{ margin:2rem auto 5rem; padding:2.5rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:2rem; background:var(--panel-bg); border:1px solid var(--card-border); }
.climate-copy .eyebrow{ letter-spacing:0.4rem; color:#00ff9d; font-weight:700; margin-bottom:0.5rem; }
.climate-stats{ display:flex; gap:1rem; flex-wrap:wrap; margin:1.5rem 0; }
.climate-stats span{ font-size:2rem; font-weight:800; color:#00ff9d; display:block; }
.climate-list article{ background:rgba(0,0,0,0.15); padding:1rem 1.2rem; border-radius:14px; border:1px solid var(--card-border); }
.glow-btn.compact{ padding:0.8rem 1.8rem; text-transform:none; letter-spacing:1px; }

@media (max-width: 900px) {
  .hero-inner { flex-direction:column; text-align:center }
  .hero-right { order: -1 }
}
</style>