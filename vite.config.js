import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Buraya kendi GitHub repo adını yaz
export default defineConfig({
  base: '/odeme-formu/',
  plugins: [react()],
})
