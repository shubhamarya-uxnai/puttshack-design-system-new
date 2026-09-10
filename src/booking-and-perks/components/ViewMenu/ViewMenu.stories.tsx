import type { Meta, StoryObj } from '@storybook/react-vite'
import { ViewMenu } from './ViewMenu'

const meta = {
  title: 'Booking & Perks/ViewMenu',
  component: ViewMenu,
  parameters: { layout: 'padded' },
  args: {
    heading: 'View Menu',
    description: "See what's on offer at Puttcade before you arrive.",
  },
} satisfies Meta<typeof ViewMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
