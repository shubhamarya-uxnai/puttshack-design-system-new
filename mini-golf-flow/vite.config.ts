import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Standalone prototype for the "Interactive Mini Golf" booking flow
// (Figma: Booking and Perks Flow, section node 4281:90780) — not part of
// Storybook. Reuses components/tokens straight from ../src, so no
// root/alias changes needed.
//
// `base` is set for GitHub Pages project-site hosting — the
// .github/workflows/deploy-mini-golf.yml Actions workflow publishes this
// build's output as the whole Pages site root (/<repo-name>/), so `base`
// must match that, not a further /mini-golf/ subpath. Override with the
// BASE_PATH env var for other hosts.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/puttshack-design-system-new/',
  build: {
    outDir: '../dist-mini-golf',
    emptyOutDir: true,
  },
})
