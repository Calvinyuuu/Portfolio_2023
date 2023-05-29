import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Calvinyuuu/Portfolio_2023.git",
  plugins: [react()],
})
