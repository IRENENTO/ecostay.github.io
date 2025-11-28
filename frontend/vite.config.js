import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Check if we're in production (GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  // Use relative paths in production for GitHub Pages
  base: isProd ? './' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Ensure assets are referenced with relative paths
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Ensure chunk filenames are consistent
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  // For development server
  server: {
    port: 3000,
    open: true,
  },
  // For production build
  preview: {
    port: 3000,
    open: true,
  },
});
