<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>EcoStay Admin</h2>
    </div>
    
    <nav class="sidebar-menu">
      <button 
        v-for="item in menuItems" 
        :key="item.id"
        :class="['menu-item', { active: activeTab === item.id }]"
        @click="$emit('select-tab', item.id)"
      >
        <span class="icon">{{ item.icon }}</span>
        <span class="label">{{ item.label }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  activeTab: {
    type: String,
    default: 'dashboard'
  }
})

defineEmits(['select-tab'])

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊'
  },
  {
    id: 'users',
    label: 'Users',
    icon: '👥'
  },
  {
    id: 'listings',
    label: 'Listings',
    icon: '🏠'
  },
  {
    id: 'bookings',
    label: 'Bookings',
    icon: '📅'
  }
]
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
  min-height: 100vh;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
}

.sidebar-header {
  padding: 1rem 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.sidebar-header h2 {
  margin: 0;
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: left;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.menu-item.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-left: 4px solid white;
}

.icon {
  font-size: 1.3rem;
}

.label {
  flex: 1;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
  
  .sidebar-menu {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem;
  }
  
  .menu-item {
    flex-shrink: 0;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.8rem;
  }
  
  .label {
    font-size: 0.8rem;
  }
}
</style>
