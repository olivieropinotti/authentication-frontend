import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Binds to 0.0.0.0 to allow external access
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Ensure this matches your exposed port
  },
})
