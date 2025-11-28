<template>
  <div class="dashboard">
    <h1>Welcome to Your Dashboard</h1>
    
    <div class="stats">
      <div class="stat-card">
        <h3>Total Listings</h3>
        <p>{{ listings.length }}</p>
      </div>
      <div class="stat-card">
        <h3>Active Bookings</h3>
        <p>{{ activeBookings }}</p>
      </div>
      <div class="stat-card">
        <h3>Revenue This Month</h3>
        <p>₹{{ monthlyRevenue.toLocaleString() }}</p>
      </div>
    </div>

    <h2>Your Listings</h2>
    
    <div v-if="loading" class="loading">
      Loading your properties...
    </div>

    <div v-else-if="listings.length === 0" class="empty">
      <p>You haven't added any listings yet.</p>
      <button @click="goToCreateListing" class="btn-primary">
        Add Your First Property
      </button>
    </div>

    <div v-else class="listings-grid">
      <ListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @edit="editListing"
        @delete="deleteListing"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ListingCard from '../components/ListingCard.vue'

// Reactive data
const listings = ref([])
const loading = ref(true)
const activeBookings = ref(12)
const monthlyRevenue = ref(156000)

// Router
const router = useRouter()

// Mock data (replace with real API later)
const mockListings = [
  {
    id: 1,
    title: 'Cozy Beach House in Goa',
    price: 8500,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
  },
  {
    id: 2,
    title: 'Luxury Villa with Pool',
    price: 25000,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'
  },
  {
    id: 3,
    title: 'Mountain View Cabin',
    price: 12000,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1449844908441-8822079d7d43?w=800'
  }
]

// Lifecycle
onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    listings.value = mockListings
    loading.value = false
  }, 1000)
})

// Methods
const goToCreateListing = () => {
  router.push('/host/create')
}

const editListing = (id) => {
  router.push(`/host/edit/${id}`)
}

const deleteListing = async (id) => {
  if (confirm('Are you sure you want to delete this listing?')) {
    listings.value = listings.value.filter(l => l.id !== id)
    alert('Listing deleted successfully!')
  }
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
}

.stat-card p {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #00d4ff;
}

h2 {
  color: #1a1a1a;
  margin: 2rem 0 1.5rem 0;
  font-size: 1.8rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.empty {
  text-align: center;
  padding: 4rem 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin: 2rem 0;
}

.empty p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background: #00d4ff;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #00b0d4;
  transform: scale(1.05);
}

.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>