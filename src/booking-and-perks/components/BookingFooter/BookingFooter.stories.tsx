import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingFooter } from './BookingFooter'

const meta = {
  title: 'Booking & Perks/BookingFooter',
  component: BookingFooter,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BookingFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checkout: Story = {
  args: { variant: 'checkout' },
}

export const YouAreIn: Story = {
  args: { variant: 'you-are-in' },
}
