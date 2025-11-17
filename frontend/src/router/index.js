// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home.vue'
import Tourism from '../pages/tourism.vue'
import Hospitality from '../pages/hospitality.vue'
import Login from '../pages/login.vue'
import Register from '../pages/register.vue'
import { useAuthStore } from '../stores/auth'

// Lazy-load large views
const Club = () => import('../pages/club.vue')
const Dashboard = () => import('../pages/Dashboard.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/tourism', component: Tourism },
  { path: '/hospitality', component: Hospitality },
  {
    path: '/club',
    name: 'Club',
    component: Club,
    meta: {
      title: 'EcoStay Club • Rwanda Eco Family'
    }
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Member Dashboard • EcostaStay',
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory('/ecostay/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard (keeps working exactly as before)
router.beforeEach((to, from, next) => {
  try {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.user) {
      return next('/login')
    }
  } catch (err) {
    // Store might not be initialized yet during SSR or first load
    console.warn('Auth store not ready yet, allowing navigation')
  }
  next()
})

// Optional: Update document title on navigation
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'EcoStay • Sustainable Rwanda'
  }
})

export default router