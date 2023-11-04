import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//https://stackoverflow.com/questions/73459654/import-markdown-files-dynamically-with-vite
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md']
})
