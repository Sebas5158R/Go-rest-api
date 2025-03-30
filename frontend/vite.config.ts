import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      '@': '/src',
      '@components': '/src/components',
      '@libs': '/src/libs',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
