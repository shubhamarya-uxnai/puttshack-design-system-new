import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta = {
  title: 'Booking & Perks/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'selected'], table: { category: 'Variant (Figma: State)' } },
    label: { control: 'text', table: { category: 'Content (Figma: Tabs#250:0)' } },
  },
  args: { state: 'default', label: 'Morning' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = { args: { state: 'selected', label: 'Afternoon' } }
