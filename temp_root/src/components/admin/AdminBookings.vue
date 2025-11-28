<template>
  <div class="bookings-section">
    <div class="section-header">
      <div>
        <h2>Bookings Management</h2>
        <p>Total Bookings: {{ bookings.length }}</p>
      </div>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search bookings..." 
        class="search-input"
      />
    </div>

    <div class="filters">
      <button 
        v-for="filter in filters" 
        :key="filter"
        :class="['filter-btn', { active: activeFilter === filter }]"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <table class="bookings-table">
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Guest</th>
          <th>Property</th>
          <th>Check-in</th>
          <th>Check-out</th>
          <th>Guests</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in filteredBookings" :key="booking.id">
          <td class="booking-id">{{ booking.id }}</td>
          <td>{{ booking.guest }}</td>
          <td>{{ booking.property }}</td>
          <td>{{ formatDate(booking.checkIn) }}</td>
          <td>{{ formatDate(booking.checkOut) }}</td>
          <td>{{ booking.guests }}</td>
          <td class="amount">${{ booking.amount }}</td>
          <td>
            <span :class="['status-badge', booking.status]">
              {{ booking.status }}
            </span>
          </td>
          <td class="actions">
            <button @click="viewDetails(booking)" class="btn-icon" title="View">👁️</button>
            <button @click="editBooking(booking)" class="btn-icon" title="Edit">✏️</button>
            <button @click="deleteBooking(booking.id)" class="btn-icon btn-delete" title="Delete">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="filteredBookings.length === 0" class="empty-state">
      <p>No bookings found</p>
    </div>

    <BookingModal 
      v-if="showModal" 
      :booking="selectedBooking" 
      @close="showModal = false"
      @save="saveBooking"
    />

    <BookingDetailsModal 
      v-if="showDetailsModal" 
      :booking="selectedBooking" 
      @close="showDetailsModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BookingModal from './BookingModal.vue'
import BookingDetailsModal from './BookingDetailsModal.vue'

const searchQuery = ref('')
const activeFilter = ref('All')
const showModal = ref(false)
const showDetailsModal = ref(false)
const selectedBooking = ref(null)

const filters = ['All', 'Completed', 'Pending', 'Cancelled']

const bookings = ref([
  {
    id: 'BK001',
    guest: 'John Doe',
    property: 'Beachfront Cottage',
    checkIn: '2024-11-25',
    checkOut: '2024-11-30',
    guests: 2,
    amount: 750,
    status: 'completed'
  },
  {
    id: 'BK002',
    guest: 'Jane Smith',
    property: 'Mountain Villa',
    checkIn: '2024-11-28',
    checkOut: '2024-12-05',
    guests: 4,
    amount: 2450,
    status: 'pending'
  },
  {
    id: 'BK003',
    guest: 'Mike Johnson',
    property: 'Eco Treehouse',
    checkIn: '2024-11-20',
    checkOut: '2024-11-22',
    guests: 1,
    amount: 240,
    status: 'completed'
  },
  {
    id: 'BK004',
    guest: 'Sarah Wilson',
    property: 'City Apartment',
    checkIn: '2024-12-01',
    checkOut: '2024-12-08',
    guests: 2,
    amount: 1400,
    status: 'pending'
  },
  {
    id: 'BK005',
    guest: 'Tom Brown',
    property: 'Farm Stay',
    checkIn: '2024-11-15',
    checkOut: '2024-11-18',
    guests: 3,
    amount: 300,
    status: 'cancelled'
  },
  {
    id: 'BK006',
    guest: 'Alice Green',
    property: 'Beachfront Cottage',
    checkIn: '2024-12-10',
    checkOut: '2024-12-15',
    guests: 2,
    amount: 750,
    status: 'pending'
  }
])

const filteredBookings = computed(() => {
  let filtered = bookings.value

  if (activeFilter.value !== 'All') {
    filtered = filtered.filter(b => b.status === activeFilter.value.toLowerCase())
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(b => 
      b.id.toLowerCase().includes(query) ||
      b.guest.toLowerCase().includes(query) ||
      b.property.toLowerCase().includes(query)
    )
  }

  return filtered
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

const viewDetails = (booking) => {
  selectedBooking.value = { ...booking }
  showDetailsModal.value = true
}

const editBooking = (booking) => {
  selectedBooking.value = { ...booking }
  showModal.value = true
}

const deleteBooking = (id) => {
  if (confirm('Are you sure you want to delete this booking?')) {
    bookings.value = bookings.value.filter(b => b.id !== id)
  }
}

const saveBooking = (updatedBooking) => {
  const index = bookings.value.findIndex(b => b.id === updatedBooking.id)
  if (index !== -1) {
    bookings.value[index] = updatedBooking
  }
  showModal.value = false
}
</script>

<style scoped>
.bookings-section {
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

.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.7rem 1.5rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.bookings-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bookings-table th {
  padding: 1rem;
  text-align: left;
  background: #f8f9fa;
  border-bottom: 2px solid #eee;
  color: #666;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.bookings-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}

.bookings-table tbody tr:hover {
  background: #f8f9fa;
}

.booking-id {
  font-weight: 600;
  color: #667eea;
}

.amount {
  font-weight: 600;
  color: #28a745;
}

.status-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.status-badge.completed {
  background: #d4edda;
  color: #155724;
}

.status-badge.pending {
  background: #fff3cd;
  color: #856404;
}

.status-badge.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: rgba(102, 126, 234, 0.1);
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
  
  .bookings-table {
    font-size: 0.9rem;
  }
  
  .bookings-table th,
  .bookings-table td {
    padding: 0.7rem;
  }
  
  .actions {
    gap: 0.3rem;
  }
}
</style>
