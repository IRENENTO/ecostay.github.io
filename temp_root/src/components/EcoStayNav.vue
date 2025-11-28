<template>
  <nav class="ecostay-nav">
    <div class="nav-container">
      <!-- LOGO -->
      <router-link to="/ecoclub" class="logo">
        <span class="logo-icon">🌿</span>
        <span class="brand-text">EcoStay</span>
      </router-link>

      <!-- DESKTOP LINKS -->
      <div class="nav-menu">
        <router-link to="/ecoclub#about" class="nav-link" @click="closeMobileMenu">About</router-link>
        <router-link to="/ecoclub#impact" class="nav-link" @click="closeMobileMenu">Our Impact</router-link>
        <router-link to="/ecoclub#stays" class="nav-link" @click="closeMobileMenu">Eco Stays</router-link>
        <router-link to="/club" class="nav-link" @click="closeMobileMenu">Community</router-link>
      </div>

      <!-- AUTH BUTTONS -->
      <div class="auth-buttons">
        <router-link v-if="!user" to="/login" class="login-btn">Sign In</router-link>
        <router-link v-else to="/profile" class="profile-link">
          <img v-if="user.photoURL" :src="user.photoURL" class="profile-img" />
          <span v-else class="profile-initial">{{ user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U' }}</span>
        </router-link>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button @click="toggleMobileMenu" class="mobile-toggle" :class="{ 'active': mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div v-if="mobileMenuOpen" class="mobile-menu">
      <router-link to="/ecoclub#about" class="mobile-link" @click="closeMobileMenu">About</router-link>
      <router-link to="/ecoclub#impact" class="mobile-link" @click="closeMobileMenu">Our Impact</router-link>
      <router-link to="/ecoclub#stays" class="mobile-link" @click="closeMobileMenu">Eco Stays</router-link>
      <router-link to="/club" class="mobile-link" @click="closeMobileMenu">Community</router-link>
      <div class="mobile-auth" v-if="!user">
        <router-link to="/login" class="mobile-login-btn" @click="closeMobileMenu">Sign In</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = useRouter();
const user = ref(null);
const mobileMenuOpen = ref(false);
const auth = getAuth();

// Handle mobile menu toggle
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('.ecostay-nav');
  if (nav && !nav.contains(event.target)) {
    closeMobileMenu();
  }
};

// Set up auth state listener
let unsubscribeAuth;
onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
  
  // Close mobile menu on route change
  router.afterEach(() => {
    closeMobileMenu();
  });
  
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  if (unsubscribeAuth) unsubscribeAuth();
  document.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = '';
});
</script>

<style scoped>
:root {
  --primary-color: #00a651;
  --primary-hover: #008f45;
  --text-color: #2c3e50;
  --text-light: #f8f9fa;
  --bg-color: #ffffff;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

.ecostay-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 2rem;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #00a651;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.8rem;
  line-height: 1;
  margin-right: 0.25rem;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #00a651, #00cc7a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation Links */
.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: var(--transition);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.login-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
}

.login-btn:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 166, 81, 0.2);
}

.profile-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  overflow: hidden;
  text-decoration: none;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-initial {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

/* Mobile Menu Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--primary-color);
  border-radius: 3px;
  transition: var(--transition);
  transform-origin: center;
}

.mobile-toggle.active span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.mobile-link {
  display: block;
  padding: 1rem 0;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
  transition: var(--transition);
}

.mobile-link:last-child {
  border-bottom: none;
}

.mobile-link.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}

.mobile-auth {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.mobile-login-btn {
  display: block;
  text-align: center;
  background: var(--primary-color);
  color: white;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .nav-menu, .auth-buttons {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
    max-height: 0;
    overflow: hidden;
    padding: 0 2rem;
    transition: max-height 0.3s ease-out;
  }
  
  .mobile-menu.active {
    max-height: 500px;
    padding: 1rem 2rem 2rem;
  }
  
  .ecosta-nav {
    padding: 0.8rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .ecosta-nav {
    padding: 0.6rem 1rem;
  }
  
  .logo-img {
    height: 35px;
  }
  
  .brand-text {
    font-size: 1rem;
  }
}
</style>
