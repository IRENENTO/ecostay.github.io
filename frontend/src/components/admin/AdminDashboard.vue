<template>
  <div class="dashboard">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <h3>Total Users</h3>
          <span class="icon">👥</span>
        </div>
        <p class="stat-value">{{ stats.totalUsers }}</p>
        <p class="stat-change">+{{ stats.newUsersThisMonth }} this month</p>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <h3>Total Listings</h3>
          <span class="icon">🏠</span>
        </div>
        <p class="stat-value">{{ stats.totalListings }}</p>
        <p class="stat-change">+{{ stats.newListingsThisMonth }} this month</p>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <h3>Total Bookings</h3>
          <span class="icon">📅</span>
        </div>
        <p class="stat-value">{{ stats.totalBookings }}</p>
        <p class="stat-change">+{{ stats.activeBookings }} active</p>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <h3>Total Revenue</h3>
          <span class="icon">💰</span>
        </div>
        <p class="stat-value">${{ stats.totalRevenue.toLocaleString() }}</p>
        <p class="stat-change">+{{ stats.revenueGrowth }}% vs last month</p>
      </div>
    </div>

    <div class="charts-section">
      <div class="chart-card">
        <h3>Bookings This Month</h3>
        <div class="chart-placeholder">
          <div class="bar-chart">
            <div v-for="(bar, idx) in chartData" :key="idx" class="bar" :style="{ height: bar + '%' }"></div>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Revenue Trend</h3>
        <div class="chart-placeholder">
          <div class="line-chart">
            <svg viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
              <polyline points="10,80 60,40 110,60 160,20 210,50 260,30" fill="none" stroke="#667eea" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="recent-section">
      <h3>Recent Activity</h3>
      <table class="activity-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>User</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="activity in recentActivities" :key="activity.id">
            <td>{{ activity.activity }}</td>
            <td>{{ activity.user }}</td>
            <td>{{ activity.date }}</td>
            <td><span :class="['status', activity.status]">{{ activity.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref({
  totalUsers: 156,
  newUsersThisMonth: 24,
  totalListings: 89,
  newListingsThisMonth: 12,
  totalBookings: 342,
  activeBookings: 47,
  totalRevenue: 156000,
  revenueGrowth: 18
})

const chartData = ref([65, 45, 78, 92, 55, 88, 72])

const recentActivities = ref([
  { id: 1, activity: 'New Booking', user: 'John Doe', date: '2 hours ago', status: 'completed' },
  { id: 2, activity: 'New Listing', user: 'Jane Smith', date: '4 hours ago', status: 'completed' },
  { id: 3, activity: 'User Registered', user: 'Mike Johnson', date: '6 hours ago', status: 'pending' },
  { id: 4, activity: 'Booking Cancelled', user: 'Sarah Wilson', date: '1 day ago', status: 'cancelled' },
  { id: 5, activity: 'New Review', user: 'Tom Brown', date: '1 day ago', status: 'completed' }
])
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-header h3 {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.icon {
  font-size: 1.5rem;
}

.stat-value {
  margin: 0.5rem 0 0 0;
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
}

.stat-change {
  margin: 0.5rem 0 0 0;
  font-size: 0.85rem;
  color: #999;
}

.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-card h3 {
  margin-top: 0;
  color: #1a1a1a;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bar-chart {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 100%;
  width: 100%;
}

.bar {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: all 0.3s ease;
  min-height: 10%;
}

.bar:hover {
  opacity: 0.8;
}

.line-chart {
  width: 100%;
  height: 100%;
}

.line-chart svg {
  width: 100%;
  height: 100%;
}

.recent-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.recent-section h3 {
  margin-top: 0;
  color: #1a1a1a;
}

.activity-table {
  width: 100%;
  border-collapse: collapse;
}

.activity-table th {
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #eee;
  color: #666;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.activity-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}

.status {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.status.completed {
  background: #d4edda;
  color: #155724;
}

.status.pending {
  background: #fff3cd;
  color: #856404;
}

.status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .charts-section {
    grid-template-columns: 1fr;
  }
  
  .activity-table {
    font-size: 0.9rem;
  }
  
  .activity-table th,
  .activity-table td {
    padding: 0.7rem;
  }
}
</style>
