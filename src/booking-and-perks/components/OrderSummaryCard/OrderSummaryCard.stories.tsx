import type { Meta, StoryObj } from '@storybook/react-vite'
import { OrderSummaryCard } from './OrderSummaryCard'

const meta = {
  title: 'Booking & Perks/OrderSummaryCard',
  component: OrderSummaryCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof OrderSummaryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
