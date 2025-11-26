<template>
  <section id="contribute" class="section">
    <div class="header">
      <div class="heart-icon">❤️</div>
      <h2>Make a Contribution</h2>
      <p>Your kindness can change lives. Join us in upcoming sessions.</p>
    </div>

    <div class="content-grid">
      <div class="contribution-image">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400" alt="Community contribution" />
        <h3>Standing With a Child-Mother in Need</h3>
      </div>

      <div class="contribution-card">
        <div class="card-header">
          <p class="event-date">📅 Sunday, November 30, 2025</p>
          <p class="event-location">📍 GITEGA SECTOR</p>
          <p class="contributors">👥 1 contributor</p>
        </div>

        <div class="mobile-money-section">
          <p class="label">📱 Mobile Number:</p>
          <div class="code-input-group">
            <input type="text" value="0787427123" readonly />
            <button class="copy-btn" @click="copyCode" :class="{ copied: codeCopied }">
              {{ codeCopied ? '✓' : '📋' }}
            </button>
          </div>
          <p class="ussd-code">USSD Code: <strong>*182*1*1*0787427123#</strong></p>
        </div>

        <div class="recent-contributors">
          <h4>Recent Contributors:</h4>
          <div class="contributor-item">
            <span class="badge">💰</span>
            <span class="name">Irene IRUMVA</span>
            <span class="type">Money Donation</span>
          </div>
        </div>

        <a href="https://wa.me/250784095661?text=I%20want%20to%20contribute%20to%20the%20EcoStay%20Club" target="_blank" class="contribute-btn">
          ❤️ Contribute Now
        </a>

        <p class="whatsapp-note">💬 Send proof via WhatsApp to <strong>NIYIGABA Heritier</strong></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const codeCopied = ref(false)

const copyCode = () => {
  const number = '0787427123'
  navigator.clipboard.writeText(number)
  codeCopied.value = true
  setTimeout(() => {
    codeCopied.value = false
  }, 2000)
}
</script>

<style scoped>
.section {
  padding: 4rem 5%;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
}

.header {
  margin-bottom: 3rem;
}

.heart-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.header > p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
}

.contribution-image {
  text-align: left;
}

.contribution-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.contribution-image img:hover {
  transform: scale(1.02);
}

.contribution-image h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin: 0;
}

.contribution-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.card-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.card-header p {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
}

.mobile-money-section {
  margin: 1.5rem 0;
  background: rgba(0, 255, 157, 0.08);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #00ff9d;
}

.label {
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.code-input-group {
  display: flex;
  gap: 0.8rem;
}

.code-input-group input {
  flex: 1;
  border: 2px solid #00ff9d;
  border-radius: 8px;
  padding: 0.9rem 1rem;
  font-family: monospace;
  font-size: 1rem;
  color: #00ff9d;
  background: white;
  font-weight: 700;
}

.copy-btn {
  background: #00ff9d;
  border: none;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-btn:hover {
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.4);
  transform: scale(1.05);
}

.copy-btn.copied {
  background: #00cc7a;
}

.ussd-code {
  margin-top: 1rem;
  padding: 0.8rem;
  background: rgba(0, 255, 157, 0.05);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #2c3e50;
  border-left: 3px solid #00ff9d;
}

.ussd-code strong {
  color: #00ff9d;
  font-family: monospace;
}

.recent-contributors {
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.recent-contributors h4 {
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
}

.contributor-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #666;
  font-size: 0.9rem;
}

.badge {
  font-size: 1.2rem;
}

.name {
  font-weight: 700;
  color: #2c3e50;
}

.type {
  color: #999;
  font-size: 0.85rem;
}

.contribute-btn {
  display: block;
  background: linear-gradient(135deg, #FFD700 0%, #00a8ff 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  margin: 2rem 0;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

.contribute-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255, 215, 0, 0.5);
}

.whatsapp-note {
  color: #666;
  font-size: 0.9rem;
  margin: 1rem 0 0 0;
  text-align: center;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  .heart-icon {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 2.5rem 3%;
  }

  h2 {
    font-size: 1.6rem;
  }

  .heart-icon {
    font-size: 2.5rem;
  }

  .contribution-card {
    padding: 1.5rem;
  }

  .code-input-group {
    flex-direction: column;
  }

  .copy-btn {
    width: 100%;
  }
}
</style>
