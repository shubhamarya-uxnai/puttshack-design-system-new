import { addons } from 'storybook/manager-api'
import { puttshackTheme } from './theme'

addons.setConfig({
  theme: puttshackTheme,
  sidebar: {
    showRoots: true,
  },
})
