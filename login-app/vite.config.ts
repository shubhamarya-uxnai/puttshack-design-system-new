import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone preview app for the 4-screen login flow — not part of Storybook.
// Reuses components/tokens straight from ../src, so no root/alias changes needed.
export default defineConfig({
  plugins: [react()],
})
