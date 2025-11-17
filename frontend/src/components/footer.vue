<template>
  <footer class="ecostay-footer" :dir="isArabic ? 'rtl' : 'ltr'">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- LOGO & ABOUT -->
          <div class="footer-col logo-col">
            <router-link to="/" class="footer-logo">
              <img src="../assets/logo.png" alt="EcostaStay Rwanda" />
            </router-link>
            <h3>EcostaStay Rwanda</h3>
            <p>{{ $t('footer.tagline') || 'Sustainable luxury stays in the heart of a thousand hills. Book eco-lodges, gorilla tours & volcano adventures.' }}</p>
            <div class="social-links">
              <a href="https://www.instagram.com/eco_stayrw/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://wa.me/250784095661" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
              <a href="https://x.com/EcostayRW" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="https://web.facebook.com/profile.php?id=61583370185144" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div class="footer-col">
            <h4>{{ $t('footer.quick') || 'Quick Links' }}</h4>
            <ul>
              <li><router-link to="/">{{ $t('nav.home') || 'Home' }}</router-link></li>
              <li><router-link to="/tourism">{{ $t('nav.tourism') || 'Tourism' }}</router-link></li>
              <li><router-link to="/hospitality">{{ $t('nav.hospitality') || 'Hospitality' }}</router-link></li>
              <li><router-link to="/club">{{ $t('nav.club') || 'Club' }}</router-link></li>
              <li><router-link to="/login">{{ $t('nav.login') || 'Login' }}</router-link></li>
            </ul>
          </div>

          <!-- DESTINATIONS -->
          <div class="footer-col">
            <h4>{{ $t('footer.destinations') || 'Top Destinations' }}</h4>
            <ul>
              <li><a href="#">Volcanoes National Park</a></li>
              <li><a href="#">Lake Kivu</a></li>
              <li><a href="#">Nyungwe Forest</a></li>
              <li><a href="#">Akagera National Park</a></li>
              <li><a href="#">Kigali City Tour</a></li>
            </ul>
          </div>

          <!-- CONTACT -->
          <div class="footer-col contact-col">
            <h4>{{ $t('footer.contact') || 'Contact Us' }}</h4>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <p>+250 784095661</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <p>ecostayrwanda@gmail.com</p>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>KN 2 St, Kigali<br>Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 EcostaStay Rwanda. {{ $t('footer.rights') || 'All rights reserved.' }}</p>
        <div class="legal-links">
          <router-link to="/privacy">{{ $t('footer.privacy') || 'Privacy Policy' }}</router-link>
          <router-link to="/terms">{{ $t('footer.terms') || 'Terms of Service' }}</router-link>
          <router-link to="/cookies">{{ $t('footer.cookies') || 'Cookies' }}</router-link>
        </div>
      </div>
    </div>

    <!-- WHATSAPP FLOAT -->
    <a href="https://wa.me/250784095661" class="whatsapp-float" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')
</script>

<style scoped>
.ecostay-footer {
  background: var(--bg-main);
  color: var(--text-main);
  margin-top: 8rem;
  position: relative;
  overflow: hidden;
  transition: background 0.4s ease, color 0.4s ease;
}

.ecostay-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 5px;
  background: linear-gradient(90deg, #00ff9d, #00cc7a, #00ff9d);
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.8);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-top { padding: 5rem 0 3rem; }

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 4rem;
}

.footer-logo img {
  height: 90px;
  filter: drop-shadow(0 0 30px rgba(0, 255, 157, 0.7));
  margin-bottom: 1rem;
}

.footer-col h3 {
  font-size: 2rem;
  background: linear-gradient(90deg, #00ff9d, #00cc7a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.footer-col h4 {
  color: #00ff9d;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 60px;
  height: 4px;
  background: #00ff9d;
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.6);
}

.footer-col ul { list-style: none; }
.footer-col ul li { margin: 0.9rem 0; }
.footer-col a {
  color: var(--text-main);
  text-decoration: none;
  transition: 0.4s;
  font-weight: 500;
}
.footer-col a:hover {
  color: #00ff9d;
  padding-left: 10px;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.social-links a {
  width: 50px; height: 50px;
  background: rgba(0, 255, 157, 0.2);
  border: 2px solid #00ff9d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #00ff9d;
  transition: 0.5s;
}
.social-links a:hover {
  background: #00ff9d;
  color: #000;
  transform: translateY(-10px) rotate(360deg);
  box-shadow: 0 15px 30px rgba(0, 255, 157, 0.5);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin: 1.2rem 0;
}
.contact-item i {
  color: #00ff9d;
  font-size: 1.3rem;
  margin-top: 0.3rem;
}

.footer-bottom {
  border-top: 1px solid rgba(0, 255, 157, 0.3);
  padding: 2rem 0;
  text-align: center;
  font-size: 0.95rem;
}
.legal-links a {
  color: #00ff9d;
  margin: 0 1.2rem;
  text-decoration: none;
}
.legal-links a:hover { text-decoration: underline; }

/* WHATSAPP FLOAT */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.6);
  z-index: 9998;
  animation: pulse 2s infinite;
  transition: 0.4s;
}
.whatsapp-float:hover {
  transform: scale(1.2);
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.8);
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-col h4 { font-size: 1.2rem; }
}
</style>