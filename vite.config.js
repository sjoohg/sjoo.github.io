import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If your site is published at https://<user>.github.io/<repo>/ set base accordingly.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
