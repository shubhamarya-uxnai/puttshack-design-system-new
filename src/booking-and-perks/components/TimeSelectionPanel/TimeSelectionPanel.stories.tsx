import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimeSelectionPanel } from './TimeSelectionPanel'

const meta = {
  title: 'Booking & Perks/TimeSelectionPanel',
  component: TimeSelectionPanel,
  parameters: { layout: 'padded' },
  args: { seeAllTimes: true },
} satisfies Meta<typeof TimeSelectionPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
