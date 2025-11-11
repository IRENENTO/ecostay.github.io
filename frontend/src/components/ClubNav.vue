<template>
  <header class="club-nav">
    <div class="club-container">
      <router-link to="/club" class="club-logo">
        <img src="../assets/logo.png" alt="EcostaStay Club" />
      </router-link>
      <nav class="club-links">
        <router-link to="/club" class="club-link">Home</router-link>
        <router-link to="/club/events" class="club-link">Events</router-link>
        <router-link to="/club/story" class="club-link">Story</router-link>
        <router-link to="/club/team" class="club-link">Team</router-link>
        <router-link to="/club/news" class="club-link">News</router-link>
        <router-link to="/club/contribute" class="club-link cta">Join</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Club-specific navigation (minimal)
</script>

<style scoped>
.club-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, rgba(0,15,10,0.95), rgba(0,0,0,0.9));
  z-index: 9999;
  padding: 0.9rem 4%;
  border-bottom: 2px solid #00ff9d;
}

.club-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.club-logo img { height: 56px; filter: drop-shadow(0 0 14px #00ff9d); }

.club-links { display:flex; gap:1rem; align-items:center; }

.club-link { color: white; text-decoration:none; padding:0.45rem 0.9rem; border-radius:12px; font-weight:700; }
.club-link:hover { background: rgba(0,255,157,0.12); color: #00ff9d; }

.club-link.cta { background: #00ff9d; color: black; border-radius: 20px; padding:0.5rem 1rem; box-shadow:0 0 20px rgba(0,255,157,0.25); }

@media (max-width: 800px) {
  .club-links { display:none; }
}
</style>
