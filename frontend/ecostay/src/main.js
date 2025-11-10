// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'  // We'll create this

createApp(App).use(router).mount('#app')