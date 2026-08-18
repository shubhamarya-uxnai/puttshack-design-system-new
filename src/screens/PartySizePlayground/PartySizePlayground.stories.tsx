import type { Meta, StoryObj } from '@storybook/react-vite'
import { PartySizePlayground } from './PartySizePlayground'

const meta = {
  title: 'Screens/Party Size Playground',
  component: PartySizePlayground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Figma: X5YJsGIXBKazkrUaxk0jR9, node 3031:75761 — "Player Count & Registration Logic Map" and its scenario screens. Adjust Adults/Young Adults/Juniors and the "Include me" toggle to see the booking picker and the resulting Manage Your Party roster update live, per the flow\'s own conditional rules.',
      },
    },
  },
} satisfies Meta<typeof PartySizePlayground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
