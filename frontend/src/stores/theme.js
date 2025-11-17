import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  return localStorage.getItem('theme') || 'dark'
}

const applyTheme = (value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = value
  }
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(getPreferredTheme())

  const setTheme = (value) => {
    theme.value = value
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', value)
    }
    applyTheme(value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  // apply immediately on store creation
  applyTheme(theme.value)

  watch(theme, (value) => applyTheme(value))

  return { theme, setTheme, toggleTheme }
})

