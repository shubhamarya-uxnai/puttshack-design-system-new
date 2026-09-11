import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingFooter } from './BookingFooter'

const meta = {
  title: 'Booking & Perks/BookingFooter',
  component: BookingFooter,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BookingFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { location: 'Chicago, IL', date: 'APR 21', time: '5:00 PM', price: '$0.00', checkoutDisabled: true },
}

export const FullSelection: Story = {
  args: {
    location: 'Chicago, IL',
    date: 'APR 21',
    time: '5:00 PM',
    guests: '3 Adults + 1 Young Adult + 1 Junior',
    experience: 'Puttcade',
    setup: '1 Bays',
    duration: '120 Minutes',
    bundle: 'Putt+Pour',
    price: '$144.00',
  },
}
