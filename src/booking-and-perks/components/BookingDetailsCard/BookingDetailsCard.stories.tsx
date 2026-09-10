import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingDetailsCard } from './BookingDetailsCard'

const meta = {
  title: 'Booking & Perks/BookingDetailsCard',
  component: BookingDetailsCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof BookingDetailsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
