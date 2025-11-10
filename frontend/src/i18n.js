// src/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import kin from './locales/kin.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'

const messages = { en, kin, fr, ar }

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  silentFallbackWarn: true,
  silentTranslationWarn: true
})

export default i18n