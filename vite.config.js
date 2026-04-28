import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
          if (id.includes('chart.js') || id.includes('react-chartjs-2')) return 'chart-vendor';
          if (id.includes('framer-motion')) return 'motion-vendor';
          if (id.includes('react-i18next') || id.includes('i18next')) return 'i18n-vendor';
        },
      },
    },
  }
})
