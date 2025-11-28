<template>
  <div class="admin-container">
    <AdminSidebar :active-tab="activeTab" @select-tab="activeTab = $event" />
    
    <div class="admin-content">
      <div class="admin-header">
        <h1>{{ pageTitle }}</h1>
        <button @click="logout" class="btn-logout">Logout</button>
      </div>

      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import AdminSidebar from '../components/admin/AdminSidebar.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import AdminUsers from '../components/admin/AdminUsers.vue'
import AdminListings from '../components/admin/AdminListings.vue'
import AdminBookings from '../components/admin/AdminBookings.vue'

const router = useRouter()
const authStore = useAuthStore()

const activeTab = ref('dashboard')

const pageTitle = computed(() => {
  const titles = {
    dashboard: 'Dashboard',
    users: 'Users Management',
    listings: 'Listings Management',
    bookings: 'Bookings Management'
  }
  return titles[activeTab.value] || 'Admin Panel'
})

const currentComponent = computed(() => {
  const components = {
    dashboard: AdminDashboard,
    users: AdminUsers,
    listings: AdminListings,
    bookings: AdminBookings
  }
  return components[activeTab.value] || AdminDashboard
})

const logout = () => {
  authStore.logout()
}
</script>

<style scoped>
.admin-container {
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
}

.admin-content {
  flex: 1;
  padding: 2rem;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.admin-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #1a1a1a;
}

.btn-logout {
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: #c82333;
}

@media (max-width: 768px) {
  .admin-container {
    flex-direction: column;
  }
  
  .admin-content {
    padding: 1rem;
  }
  
  .admin-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .admin-header h1 {
    font-size: 1.5rem;
  }
}
</style>
