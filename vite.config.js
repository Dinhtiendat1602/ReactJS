import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://dinhtiendat1602.github.io/ReactJS/',
  plugins: [react()],
})
