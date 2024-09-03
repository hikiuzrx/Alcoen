import { defineConfig } from 'vite'
import { configDotenv } from 'dotenv'
import react from '@vitejs/plugin-react'
configDotenv()

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: parseInt(process.env.PORT? process.env.PORT :"3000")
  },
  plugins: [react()],
})
