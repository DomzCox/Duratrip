import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vis.gl/react-google-maps/examples.js':
        'https://visgl.github.io/react-google-maps/scripts/'
    }
  }
})
