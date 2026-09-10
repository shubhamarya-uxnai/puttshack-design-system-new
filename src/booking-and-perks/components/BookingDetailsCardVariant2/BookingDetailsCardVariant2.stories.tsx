import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingDetailsCardVariant2 } from './BookingDetailsCardVariant2'

const meta = {
  title: 'Booking & Perks/BookingDetailsCardVariant2',
  component: BookingDetailsCardVariant2,
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
} satisfies Meta<typeof BookingDetailsCardVariant2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
