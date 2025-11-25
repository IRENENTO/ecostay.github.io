// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home.vue'
import Tourism from '../pages/tourism.vue'
import Hospitality from '../pages/hospitality.vue'
import Club from '../pages/club.vue'
import EcoStayClub from '../club/EcostayClub.vue'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'
import Admin from '../pages/Admin.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/ecostay', redirect: '/' },
  { path: '/ecostay/', redirect: '/' },
  { path: '/tourism', component: Tourism },
  { path: '/hospitality', component: Hospitality },
  { path: '/club', component: Club },
  { path: '/ecoclub', component: EcoStayClub, meta: { title: 'EcoStay Club - Sustainable Stays' } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Navigation guard to protect routes that require auth
router.beforeEach((to, from, next) => {
  try {
    const authStore = useAuthStore()
    if (to.meta && to.meta.requiresAuth && !authStore.user) {
      // redirect to login and preserve the original target so the user returns after sign-in
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } catch (err) {
    // If store isn't available yet, allow navigation (will be handled after app init)
    // console.warn('Auth store not ready', err)
  }
  next()
})

export default router