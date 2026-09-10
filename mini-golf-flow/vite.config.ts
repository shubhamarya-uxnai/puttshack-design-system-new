import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone prototype for the "Interactive Mini Golf" booking flow
// (Figma: Booking and Perks Flow, section node 4281:90780) — not part of
// Storybook. Reuses components/tokens straight from ../src, so no
// root/alias changes needed.
export default defineConfig({
  plugins: [react()],
})
