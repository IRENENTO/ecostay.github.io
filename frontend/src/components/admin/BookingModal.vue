<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h2>Edit Booking</h2>
        <button @click="$emit('close')" class="btn-close">✕</button>
      </div>

      <div class="modal-body">
        <div class="form-group">
          <label>Booking ID</label>
          <input v-model="formData.id" type="text" class="input-field" disabled />
        </div>

        <div class="form-group">
          <label>Guest Name</label>
          <input v-model="formData.guest" type="text" class="input-field" />
        </div>

        <div class="form-group">
          <label>Property</label>
          <input v-model="formData.property" type="text" class="input-field" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Check-in</label>
            <input v-model="formData.checkIn" type="date" class="input-field" />
          </div>

          <div class="form-group">
            <label>Check-out</label>
            <input v-model="formData.checkOut" type="date" class="input-field" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Number of Guests</label>
            <input v-model.number="formData.guests" type="number" class="input-field" />
          </div>

          <div class="form-group">
            <label>Amount ($)</label>
            <input v-model.number="formData.amount" type="number" class="input-field" />
          </div>
        </div>

        <div class="form-group">
          <label>Status</label>
          <select v-model="formData.status" class="input-field">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="$emit('close')" class="btn btn-cancel">Cancel</button>
        <button @click="saveChanges" class="btn btn-save">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const formData = ref({ ...props.booking })

watch(() => props.booking, (newBooking) => {
  formData.value = { ...newBooking }
})

const saveChanges = () => {
  emit('save', formData.value)
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
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.input-field {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-field:disabled {
  background: #f8f9fa;
  color: #999;
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

.btn-cancel {
  background: #e2e3e5;
  color: #383d41;
}

.btn-cancel:hover {
  background: #d6d8db;
}

.btn-save {
  background: #667eea;
  color: white;
}

.btn-save:hover {
  background: #5568d3;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
