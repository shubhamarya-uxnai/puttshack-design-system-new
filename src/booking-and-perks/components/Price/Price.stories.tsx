import type { Meta, StoryObj } from '@storybook/react-vite'
import { Price } from './Price'

const meta = {
  title: 'Booking & Perks/Price',
  component: Price,
  parameters: { layout: 'padded' },
  args: { amount: '$45' },
} satisfies Meta<typeof Price>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Discounted: Story = {
  args: { amount: '$45', originalAmount: '$60' },
}

export const Inverse: Story = {
  args: { amount: '$45', originalAmount: '$60', inverse: true },
  parameters: { backgrounds: { default: 'dark' } },
}
