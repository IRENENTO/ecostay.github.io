<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h2>Booking Details</h2>
        <button @click="$emit('close')" class="btn-close">✕</button>
      </div>

      <div class="modal-body">
        <div class="detail-section">
          <h3>Booking Information</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">Booking ID:</span>
              <span class="value">{{ booking.id }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Status:</span>
              <span :class="['value', 'status', booking.status]">{{ booking.status }}</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>Guest Information</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">Guest Name:</span>
              <span class="value">{{ booking.guest }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Number of Guests:</span>
              <span class="value">{{ booking.guests }}</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>Property & Dates</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">Property:</span>
              <span class="value">{{ booking.property }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Check-in:</span>
              <span class="value">{{ formatDate(booking.checkIn) }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Check-out:</span>
              <span class="value">{{ formatDate(booking.checkOut) }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Duration:</span>
              <span class="value">{{ getDuration() }} nights</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h3>Payment Information</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">Total Amount:</span>
              <span class="value amount">${{ booking.amount }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Payment Status:</span>
              <span class="value">Paid</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="$emit('close')" class="btn btn-close-modal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

const getDuration = () => {
  const checkIn = new Date(props.booking.checkIn)
  const checkOut = new Date(props.booking.checkOut)
  return Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: white;
}

.modal-header h2 {
  margin: 0;
  color: #1a1a1a;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-close:hover {
  background: #f8f9fa;
  color: #333;
}

.modal-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.detail-section:last-of-type {
  border-bottom: none;
}

.detail-section h3 {
  margin: 0;
  color: #667eea;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: #666;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 500;
}

.value.status {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  text-transform: capitalize;
  font-weight: 600;
  width: fit-content;
}

.value.status.completed {
  background: #d4edda;
  color: #155724;
}

.value.status.pending {
  background: #fff3cd;
  color: #856404;
}

.value.status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.amount {
  color: #28a745;
  font-size: 1.2rem;
  font-weight: 600;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #eee;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
  background: white;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.btn-close-modal {
  background: #667eea;
  color: white;
}

.btn-close-modal:hover {
  background: #5568d3;
}

@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
