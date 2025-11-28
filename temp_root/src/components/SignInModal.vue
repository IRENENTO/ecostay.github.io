<template>
  <div class="sign-in-overlay" @click.self="$emit('close')">
    <div class="sign-in-card glass">
      <button class="close-btn" @click="$emit('close')">×</button>
      <div class="sign-in-header">
        <h3>Welcome Back</h3>
        <p>Sign in to your EcostaStay Club account</p>
      </div>

      <form @submit.prevent="handleSignIn" class="sign-in-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="credentials.email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="credentials.password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input v-model="credentials.rememberMe" type="checkbox" />
            Remember me
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button type="submit" class="sign-in-submit">Sign In</button>
      </form>

      <div class="divider">or</div>

      <div class="social-signin">
        <button class="social-btn google-btn">
          <span>🔍 Google</span>
        </button>
        <button class="social-btn github-btn">
          <span>🐙 GitHub</span>
        </button>
      </div>

      <p class="sign-up-link">
        Don't have an account?
        <a href="#" @click.prevent="$emit('close')">Join us here</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const credentials = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const handleSignIn = () => {
  console.log('Sign in attempt:', {
    email: credentials.email,
    rememberMe: credentials.rememberMe
  })
}
</script>

<style scoped>
.sign-in-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 10000;
  backdrop-filter: blur(5px);
}

.sign-in-card {
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.sign-in-header {
  margin-bottom: 2rem;
  text-align: center;
}

.sign-in-header h3 {
  font-size: 1.8rem;
  color: #1a1a2e;
  margin: 0 0 0.5rem 0;
}

.sign-in-header p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.sign-in-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

.form-group input {
  padding: 0.9rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #00ff9d;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1.5rem 0;
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  cursor: pointer;
}

.remember-me input {
  cursor: pointer;
}

.forgot-password {
  color: #00a651;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.forgot-password:hover {
  color: #00ff9d;
}

.sign-in-submit {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #00a651, #00ff9d);
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sign-in-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 255, 157, 0.3);
}

.divider {
  text-align: center;
  color: #999;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.social-signin {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #00ff9d;
  background: rgba(0, 255, 157, 0.05);
}

.sign-up-link {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.sign-up-link a {
  color: #00a651;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.sign-up-link a:hover {
  color: #00ff9d;
  text-decoration: underline;
}

@media (max-width: 480px) {
  .sign-in-card {
    padding: 1.5rem;
  }

  .sign-in-header h3 {
    font-size: 1.5rem;
  }
}
</style>
