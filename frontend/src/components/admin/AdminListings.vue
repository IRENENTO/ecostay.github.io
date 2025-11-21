<template>
  <div class="listings-section">
    <div class="section-header">
      <div>
        <h2>Listings Management</h2>
        <p>Total Listings: {{ listings.length }}</p>
      </div>
      <div class="header-actions">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search listings..." 
          class="search-input"
        />
        <button @click="addNewListing" class="btn-add">+ Add Listing</button>
      </div>
    </div>

    <div class="listings-grid">
      <div v-for="listing in filteredListings" :key="listing.id" class="listing-card">
        <div class="listing-image" :style="{ backgroundImage: `url(${listing.image})` }"></div>
        
        <div class="listing-content">
          <h3>{{ listing.title }}</h3>
          <p class="listing-location">📍 {{ listing.location }}</p>
          
          <div class="listing-stats">
            <span class="rating">⭐ {{ listing.rating }}</span>
            <span class="price">${{ listing.price }}/night</span>
          </div>

          <div class="listing-info">
            <p><strong>Host:</strong> {{ listing.host }}</p>
            <p><strong>Status:</strong> <span :class="['status', listing.status]">{{ listing.status }}</span></p>
            <p><strong>Bookings:</strong> {{ listing.bookings }}</p>
          </div>

          <div class="listing-actions">
            <button @click="editListing(listing)" class="btn-action btn-edit">✏️ Edit</button>
            <button @click="toggleStatus(listing)" class="btn-action btn-toggle">{{ listing.status === 'active' ? '🚫 Deactivate' : '✅ Activate' }}</button>
            <button @click="deleteListing(listing.id)" class="btn-action btn-delete">🗑️ Delete</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredListings.length === 0" class="empty-state">
      <p>No listings found</p>
    </div>

    <ListingModal 
      v-if="showModal" 
      :listing="selectedListing" 
      @close="showModal = false"
      @save="saveListing"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ListingModal from './ListingModal.vue'

const searchQuery = ref('')
const showModal = ref(false)
const selectedListing = ref(null)

const listings = ref([
  {
    id: 'L001',
    title: 'Cozy Beachfront Cottage',
    location: 'Mombasa, Kenya',
    price: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400',
    host: 'Jane Smith',
    status: 'active',
    bookings: 24
  },
  {
    id: 'L002',
    title: 'Luxury Mountain Villa',
    location: 'Nairobi, Kenya',
    price: 350,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    host: 'Tom Brown',
    status: 'active',
    bookings: 18
  },
  {
    id: 'L003',
    title: 'Eco-Friendly Treehouse',
    location: 'Kigali, Rwanda',
    price: 120,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1449844908441-8822079d7d43?w=400',
    host: 'Mike Johnson',
    status: 'inactive',
    bookings: 5
  },
  {
    id: 'L004',
    title: 'Modern City Apartment',
    location: 'Dar es Salaam, Tanzania',
    price: 200,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400',
    host: 'Sarah Wilson',
    status: 'active',
    bookings: 31
  },
  {
    id: 'L005',
    title: 'Sustainable Farm Stay',
    location: 'Kampala, Uganda',
    price: 100,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
    host: 'John Doe',
    status: 'active',
    bookings: 12
  }
])

const filteredListings = computed(() => {
  if (!searchQuery.value) return listings.value
  
  const query = searchQuery.value.toLowerCase()
  return listings.value.filter(listing => 
    listing.title.toLowerCase().includes(query) ||
    listing.location.toLowerCase().includes(query) ||
    listing.host.toLowerCase().includes(query)
  )
})

const addNewListing = () => {
  selectedListing.value = {
    id: 'L' + Date.now(),
    title: '',
    location: '',
    price: 0,
    rating: 0,
    image: '',
    host: '',
    status: 'active',
    bookings: 0
  }
  showModal.value = true
}

const editListing = (listing) => {
  selectedListing.value = { ...listing }
  showModal.value = true
}

const toggleStatus = (listing) => {
  const index = listings.value.findIndex(l => l.id === listing.id)
  if (index !== -1) {
    listings.value[index].status = listing.status === 'active' ? 'inactive' : 'active'
  }
}

const deleteListing = (id) => {
  if (confirm('Are you sure you want to delete this listing?')) {
    listings.value = listings.value.filter(l => l.id !== id)
  }
}

const saveListing = (updatedListing) => {
  const index = listings.value.findIndex(l => l.id === updatedListing.id)
  if (index !== -1) {
    listings.value[index] = updatedListing
  } else {
    listings.value.push(updatedListing)
  }
  showModal.value = false
}
</script>

<style scoped>
.listings-section {
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

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
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

.btn-add {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-add:hover {
  background: #218838;
}

.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.listing-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.listing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.listing-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.listing-content {
  padding: 1.5rem;
}

.listing-content h3 {
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-size: 1.1rem;
}

.listing-location {
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.9rem;
}

.listing-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.rating {
  color: #f39c12;
  font-weight: 600;
}

.price {
  color: #667eea;
  font-weight: 600;
}

.listing-info {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #333;
}

.listing-info p {
  margin: 0.5rem 0;
}

.status {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status.active {
  background: #d4edda;
  color: #155724;
}

.status.inactive {
  background: #f8d7da;
  color: #721c24;
}

.listing-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-action {
  flex: 1;
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 80px;
}

.btn-edit {
  background: #e7f3ff;
  color: #0066cc;
}

.btn-edit:hover {
  background: #cce5ff;
}

.btn-toggle {
  background: #fff3cd;
  color: #856404;
}

.btn-toggle:hover {
  background: #ffe69c;
}

.btn-delete {
  background: #f8d7da;
  color: #721c24;
}

.btn-delete:hover {
  background: #f5c6cb;
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
  
  .header-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .search-input {
    width: 100%;
    min-width: auto;
  }
  
  .listings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
