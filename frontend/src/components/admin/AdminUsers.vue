<template>
  <div class="users-section">
    <div class="section-header">
      <div>
        <h2>Users Management</h2>
        <p>Total Users: {{ users.length }}</p>
      </div>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search users..." 
        class="search-input"
      />
    </div>

    <table class="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <select v-model="user.role" class="role-select" @change="updateUser(user)">
              <option value="user">User</option>
              <option value="host">Host</option>
              <option value="admin">Admin</option>
            </select>
          </td>
          <td>
            <span :class="['status-badge', user.status]">
              {{ user.status }}
            </span>
          </td>
          <td>{{ user.joined }}</td>
          <td class="actions">
            <button @click="editUser(user)" class="btn-icon btn-edit" title="Edit">✏️</button>
            <button @click="deleteUser(user.id)" class="btn-icon btn-delete" title="Delete">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="filteredUsers.length === 0" class="empty-state">
      <p>No users found</p>
    </div>

    <UserModal 
      v-if="showModal" 
      :user="selectedUser" 
      @close="showModal = false"
      @save="saveUser"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import UserModal from './UserModal.vue'

const searchQuery = ref('')
const showModal = ref(false)
const selectedUser = ref(null)

const users = ref([
  {
    id: 'U001',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    status: 'active',
    joined: '2024-01-15'
  },
  {
    id: 'U002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'host',
    status: 'active',
    joined: '2024-01-20'
  },
  {
    id: 'U003',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    joined: '2024-02-01'
  },
  {
    id: 'U004',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'admin',
    status: 'active',
    joined: '2024-01-10'
  },
  {
    id: 'U005',
    name: 'Tom Brown',
    email: 'tom@example.com',
    role: 'host',
    status: 'active',
    joined: '2024-02-05'
  }
])

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  
  const query = searchQuery.value.toLowerCase()
  return users.value.filter(user => 
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query) ||
    user.id.toLowerCase().includes(query)
  )
})

const editUser = (user) => {
  selectedUser.value = { ...user }
  showModal.value = true
}

const updateUser = (user) => {
  const index = users.value.findIndex(u => u.id === user.id)
  if (index !== -1) {
    users.value[index] = user
  }
}

const deleteUser = (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    users.value = users.value.filter(u => u.id !== id)
  }
}

const saveUser = (updatedUser) => {
  const index = users.value.findIndex(u => u.id === updatedUser.id)
  if (index !== -1) {
    users.value[index] = updatedUser
  }
  showModal.value = false
}
</script>

<style scoped>
.users-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-header h2 {
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.section-header p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.search-input {
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  min-width: 250px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.users-table th {
  padding: 1rem;
  text-align: left;
  background: #f8f9fa;
  border-bottom: 2px solid #eee;
  color: #666;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.users-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}

.users-table tbody tr:hover {
  background: #f8f9fa;
}

.role-select {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  background: white;
}

.role-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.status-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.status-badge.active {
  background: #d4edda;
  color: #155724;
}

.status-badge.inactive {
  background: #e2e3e5;
  color: #383d41;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-edit {
  color: #667eea;
}

.btn-edit:hover {
  background: rgba(102, 126, 234, 0.1);
}

.btn-delete {
  color: #dc3545;
}

.btn-delete:hover {
  background: rgba(220, 53, 69, 0.1);
}

.empty-state {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  color: #666;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-input {
    width: 100%;
    min-width: auto;
  }
  
  .users-table {
    font-size: 0.9rem;
  }
  
  .users-table th,
  .users-table td {
    padding: 0.7rem;
  }
  
  .actions {
    gap: 0.3rem;
  }
}
</style>
