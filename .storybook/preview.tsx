import React, { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import { addons } from 'storybook/preview-api'
import { puttshackTheme } from './theme'

import '../src/styles/fonts.css'
import '../src/styles/tokens.css'
import '../src/styles/text-styles.css'
import '../src/styles/storybook.css'

/* ============================================================================
   THE ONE SWITCH, AT DOCUMENT LEVEL

   Puttshack has no Dark color mode in this codebase (the source file's Dark
   mode is literally named "Dark (NOT TO BE USED)") and no multi-brand axis —
   so unlike a system with several independent switches, there is exactly one
   here: Screen (device) mode, which only three atoms currently key off
   (Checkbox, Radio, Input OTP — see their component CSS for the confirmed
   per-mode pixel values). It's wired at the document root, the same way, so
   MDX-only pages (no story, no decorator) still resolve it correctly.
   ========================================================================== */

const DEFAULT_SCREEN = 'desktop'
let currentScreen = DEFAULT_SCREEN

function applyScreen(next: Record<string, unknown> | undefined) {
  const value = next?.screen
  if (typeof value === 'string' && value) currentScreen = value
  document.documentElement.dataset.screen = currentScreen
}

/** `globals=screen:kiosk` → `{ screen: 'kiosk' }` */
function readGlobalsFromUrl(): Record<string, string> {
  const raw = new URLSearchParams(window.location.search).get('globals') ?? ''
  const out: Record<string, string> = {}
  for (const pair of raw.split(';')) {
    const i = pair.indexOf(':')
    if (i > 0) out[pair.slice(0, i)] = pair.slice(i + 1)
  }
  return out
}

function attachToChannel(attempt = 0) {
  let channel: ReturnType<typeof addons.getChannel> | undefined
  try {
    channel = addons.getChannel()
  } catch {
    channel = undefined
  }
  if (!channel) {
    if (attempt < 80) setTimeout(() => attachToChannel(attempt + 1), 25)
    return
  }
  channel.on('globalsUpdated', (payload: { globals?: Record<string, unknown> }) => applyScreen(payload?.globals))
  channel.on('updateGlobals', (payload: { globals?: Record<string, unknown> }) => applyScreen(payload?.globals))
}

applyScreen(readGlobalsFromUrl())
attachToChannel()

const withScreenMode: Decorator = (Story, context) => {
  const { screen } = context.globals as { screen: string }

  useEffect(() => {
    document.documentElement.dataset.screen = screen
  }, [screen])

  return (
    <div className="pk-canvas" data-screen={screen}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withScreenMode],

  globalTypes: {
    screen: {
      name: 'Screen',
      description: 'Device mode — only Checkbox, Radio and Input OTP key off this today',
      toolbar: {
        title: 'Screen',
        icon: 'mobile',
        dynamicTitle: true,
        items: [
          { value: 'mobile', title: 'Mobile' },
          { value: 'desktop', title: 'Desktop' },
          { value: 'kiosk', title: 'Kiosk' },
        ],
      },
    },
  },

  initialGlobals: {
    screen: 'desktop',
  },

  parameters: {
    controls: { expanded: true },
    docs: { toc: true, theme: puttshackTheme },
    options: {
      storySort: {
        order: [
          'Start Here',
          ['Introduction', 'Foundations'],
          'Components',
          [
            'Button',
            'Checkbox',
            'Radio Button',
            'Toggle',
            'Chip',
            'Badge',
            'Input Field',
            'Input OTP',
            'Scroll Bar',
            'Toast',
          ],
        ],
      },
    },
  },
}

export default preview
