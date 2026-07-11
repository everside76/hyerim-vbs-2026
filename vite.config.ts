import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages: https://<user>.github.io/hyerim-vbs-2026/
  base: '/hyerim-vbs-2026/',
  plugins: [react(), tailwindcss()],
})
