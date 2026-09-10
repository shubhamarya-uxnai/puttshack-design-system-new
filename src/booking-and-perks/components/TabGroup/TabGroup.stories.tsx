import type { Meta, StoryObj } from '@storybook/react-vite'
import { TabGroup } from './TabGroup'

const meta = {
  title: 'Booking & Perks/TabGroup',
  component: TabGroup,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TabGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
