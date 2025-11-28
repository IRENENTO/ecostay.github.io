import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome to EcoStay',
      // Add more translations here
    }
  }
});

// Create and configure Vue app
const initApp = async () => {
  try {
    const app = createApp(App);
    
    // Use plugins
    app.use(router);
    app.use(i18n);
    
    // Mount the app
    await router.isReady();
    const vm = app.mount('#app');
    
    // Dispatch event when app is mounted
    window.dispatchEvent(new Event('app-mounted'));
    
    return vm;
  } catch (error) {
    console.error('Failed to initialize app:', error);
    
    // Show error message in the app container
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #dc3545;">
          <h2>Application Error</h2>
          <p>Failed to initialize the application. Please try refreshing the page.</p>
          <p><small>${error.message}</small></p>
        </div>
      `;
    }
    
    // Still dispatch the mounted event to hide the loading indicator
    window.dispatchEvent(new Event('app-mounted'));
  }
};

// Initialize the app
initApp();

// Log environment info
console.log('Environment:', process.env.NODE_ENV);
console.log('Base URL:', import.meta.env.BASE_URL);
