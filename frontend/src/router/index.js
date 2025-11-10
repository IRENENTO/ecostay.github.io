// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home.vue'
import Tourism from '../pages/tourism.vue'
import Hospitality from '../pages/hospitality.vue'
import Club from '../pages/club.vue'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/tourism', component: Tourism },
  { path: '/hospitality', component: Hospitality },
  { path: '/club', component: Club },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
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
      return next('/login')
    }
  } catch (err) {
    // If store isn't available yet, allow navigation (will be handled after app init)
    // console.warn('Auth store not ready', err)
  }
  next()
})

export default router