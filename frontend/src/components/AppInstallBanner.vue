<template>
  <div v-if="!dismissed" class="app-banner">
    <div class="banner-content">
      <div class="banner-left">
        <span class="app-icon">📱</span>
        <div class="banner-text">
          <p class="banner-title">Install EcoStay App</p>
          <p class="banner-subtitle">Get quick access to events, members & updates</p>
        </div>
      </div>
      <div class="banner-actions">
        <button class="install-btn" @click="handleInstall">Install Now</button>
        <button class="dismiss-btn" @click="dismissBanner" aria-label="Dismiss banner">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dismissed = ref(false)

const handleInstall = () => {
  console.log('App installation initiated')
}

const dismissBanner = () => {
  dismissed.value = true
  localStorage.setItem('ecostayclubBannerDismissed', 'true')
}
</script>

<style scoped>
.app-banner {
  background: linear-gradient(135deg, #00a651, #00ff9d);
  padding: 1.2rem 2rem;
  position: sticky;
  top: 80px;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 166, 81, 0.2);
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: black;
}

.app-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.banner-title {
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  color: black;
}

.banner-subtitle {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.install-btn {
  background: white;
  color: #00a651;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.install-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.dismiss-btn {
  background: transparent;
  border: none;
  color: black;
  font-size: 1.8rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.dismiss-btn:hover {
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .app-banner {
    padding: 1rem;
    top: 70px;
  }

  .banner-content {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .banner-left {
    flex: 1;
    min-width: 250px;
  }

  .install-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
