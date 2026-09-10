import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookingDetails } from './BookingDetails'

const meta = {
  title: 'Booking & Perks/BookingDetails',
  component: BookingDetails,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['mini-golf', 'puttcade', 'dining-only'],
    },
  },
  args: {
    variant: 'puttcade',
    heading: true,
  },
} satisfies Meta<typeof BookingDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithModifyAndRound2: Story = {
  args: { modify: true, round2: true, bundle: true },
}

export const HoldATable: Story = {
  args: { holdATable: true, variant: 'dining-only' },
}
