import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimeSlotPicker } from './TimeSlotPicker'

const meta = {
  title: 'Booking & Perks/TimeSlotPicker',
  component: TimeSlotPicker,
  parameters: { layout: 'padded' },
  args: { period: 'afternoon' },
} satisfies Meta<typeof TimeSlotPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const TwoRoundsSelector: Story = {
  args: { twoRoundsSelector: true },
}

export const Empty: Story = {
  args: { twoRoundsEmpty: true },
}
