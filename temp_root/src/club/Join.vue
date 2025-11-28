<template>
  <section id="join" class="section bg-dark">
    <div class="container">
      <p class="eyebrow">JOIN ECO FAMILY</p>
      <h2>Co-create the EcostaStay Experience</h2>
      <p>Share skills, host retreats, or sponsor regenerative projects. Every role matters.</p>
      <div class="cta-buttons">
        <button class="glow-btn" @click="showForm = true">Get Involved</button>
        <a class="event-btn" href="https://wa.me/250784095661" target="_blank" rel="noopener">Talk to Us</a>
      </div>
    </div>

    <div v-if="showForm" class="join-modal" @click.self="closeForm">
      <div class="join-card glass">
        <button class="close-btn" @click="closeForm">×</button>
        <h3>EcostaStay Club Intake</h3>
        <p>Tell us how you’d like to collaborate and we’ll respond within 24h.</p>
        <form @submit.prevent="submitForm">
          <div class="form-grid">
            <label>
              Full Name
              <input v-model="form.name" type="text" placeholder="Eg. Aline Mukasine" required />
            </label>
            <label>
              Email
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone / WhatsApp
              <input v-model="form.phone" type="tel" placeholder="+250 7.." required />
            </label>
            <label>
              City / Region
              <input v-model="form.location" type="text" placeholder="Kigali, Musanze..." />
            </label>
            <label>
              How do you want to contribute?
              <select v-model="form.track" required>
                <option disabled value="">Select option</option>
                <option>Host an Eco-Stay</option>
                <option>Volunteer Skills / Mentorship</option>
                <option>Media & Storytelling</option>
                <option>Sponsor / Fund</option>
                <option>Attend Events & Retreats</option>
              </select>
            </label>
            <label>
              Availability
              <select v-model="form.availability">
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Remote Only</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>
          <label class="full">
            Tell us more
            <textarea v-model="form.message" rows="4" placeholder="Share projects, skills, dates…" />
          </label>
          <label class="consent">
            <input type="checkbox" v-model="form.agree" required />
            I agree to receive EcostaStay updates about programs and impact.
          </label>
          <button class="glow-btn full" type="submit">Submit & Join Waitlist</button>
          <p v-if="sent" class="success-msg">Thanks! Our concierge will reach out shortly.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const showForm = ref(false)
const sent = ref(false)
const initial = {
  name: '',
  email: '',
  phone: '',
  location: '',
  track: '',
  availability: 'Flexible',
  message: '',
  agree: false
}
const form = reactive({ ...initial })

const closeForm = () => {
  showForm.value = false
}

const submitForm = () => {
  // Hook up to backend/email later; for now just show confirmation
  sent.value = true
  setTimeout(() => {
    Object.assign(form, initial)
    sent.value = false
    showForm.value = false
  }, 1800)
}
</script>

<style scoped>
.section{ padding:4rem 5%; text-align:center }
.container{ max-width:900px; margin:0 auto }
.cta-buttons{ display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:1.5rem }
.event-btn{ background:transparent; border:2px solid #00ff9d; color:#00ff9d; padding:0.8rem 1.6rem; border-radius:40px; font-weight:700; text-decoration:none }
.eyebrow{ letter-spacing:0.4rem; font-weight:700; color:#00ff9d; margin-bottom:0.6rem }

.join-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.75);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:1rem;
  z-index:9999;
}

.join-card{
  max-width:800px;
  width:100%;
  padding:2rem;
  position:relative;
}

.close-btn{
  position:absolute;
  top:1rem;
  right:1rem;
  background:transparent;
  border:none;
  font-size:1.5rem;
  color:#fff;
  cursor:pointer;
}

form{
  margin-top:1.5rem;
  text-align:left;
}

.form-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:1rem;
}

label{
  display:flex;
  flex-direction:column;
  font-size:0.95rem;
  gap:0.4rem;
  color:#bcbcbc;
}

input, select, textarea{
  border:none;
  border-radius:14px;
  padding:0.9rem 1rem;
  background:rgba(255,255,255,0.06);
  color:#fff;
}

textarea{ resize:vertical }

.full{ grid-column:1 / -1 }
.consent{ flex-direction:row; align-items:center; gap:0.6rem; margin:1rem 0 }
.consent input{ width:auto }
.success-msg{ color:#00ff9d; margin-top:1rem; text-align:center }
.glow-btn.full{ width:100%; margin-top:1rem }

@media (max-width:600px){
  .join-card{ padding:1.5rem }
}
</style>
