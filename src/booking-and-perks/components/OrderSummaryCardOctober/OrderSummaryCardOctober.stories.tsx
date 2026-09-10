import type { Meta, StoryObj } from '@storybook/react-vite'
import { OrderSummaryCardOctober } from './OrderSummaryCardOctober'

const meta = {
  title: 'Booking & Perks/OrderSummaryCardOctober',
  component: OrderSummaryCardOctober,
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
} satisfies Meta<typeof OrderSummaryCardOctober>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
