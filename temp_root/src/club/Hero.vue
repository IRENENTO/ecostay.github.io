<template>
  <section id="home" class="hero-slider">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(s, idx) in slides" :key="s.id" class="slide">
        <img :src="s.img" :alt="s.title" />
        <div class="slide-caption">
          <div class="caption-icon">{{ s.icon }}</div>
          <h2>{{ s.title }}</h2>
          <p>{{ s.subtitle }}</p>
          <div class="caption-badge">{{ s.badge }}</div>
        </div>
      </div>
    </div>

    <button @click="prevSlide" class="nav-arrow left">❮</button>
    <button @click="nextSlide" class="nav-arrow right">❯</button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    id: 'gorilla',
    icon: '🦍',
    title: 'Gorilla Trekking 2025',
    subtitle: '50+ Families Connected',
    badge: 'Premium Experience',
    img: 'https://images.unsplash.com/photo-1606787366850-de6330127b61?w=1200'
  },
  {
    id: 'lake',
    icon: '💧',
    title: 'Lake Kivu Eco Retreat',
    subtitle: 'Sustainable Stays & Water Sports',
    badge: 'Beachfront Luxury',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200'
  },
  {
    id: 'nyungwe',
    icon: '🌳',
    title: 'Nyungwe Canopy Walk',
    subtitle: 'Adventure with Purpose',
    badge: 'Forest Adventure',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200'
  }
]

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetAutoPlay()
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  resetAutoPlay()
}
const resetAutoPlay = () => {
  clearInterval(interval)
  interval = setInterval(nextSlide, 6000)
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.hero-slider { position: relative; height: 80vh; overflow: hidden; margin-top: 80px }
.slides { display:flex; width: calc(100% * 3); height:100%; transition: transform 0.8s ease }
.slide { width:100%; position: relative }
.slide img { width:100%; height:100%; object-fit:cover }
.slide-caption { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background: rgba(0,0,0,0.6); padding:1.6rem 1.8rem; border-radius:16px; border:1px solid rgba(0,255,157,0.12); text-align:center; color:#fff }
.caption-icon { font-size:3rem; margin-bottom:0.6rem }
.caption-badge { margin-top:0.6rem; background:linear-gradient(45deg,#00ff9d,#00cc7a); color:black; padding:0.4rem 0.9rem; border-radius:999px; font-weight:700 }
.nav-arrow{ position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,255,157,0.25); border:1px solid #00ff9d; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.6rem; color:#00ff9d }
.nav-arrow.left{ left:20px }
.nav-arrow.right{ right:20px }
@media (max-width:768px){ .hero-slider{height:65vh} .slide-caption{ top:auto; bottom:48px; transform:translateX(-50%); left:50% }}
</style>
