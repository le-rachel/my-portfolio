import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // allow use of css modules (so that styles with same names in different files don't overwrite each other)
  css: {
    localsConvention: "camelCase",
  }
})
