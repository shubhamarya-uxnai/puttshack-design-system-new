import type { Meta, StoryObj } from '@storybook/react-vite'
import { TermsAndConditions } from './TermsAndConditions'

const meta = {
  title: 'Booking & Perks/TermsAndConditions',
  component: TermsAndConditions,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TermsAndConditions>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Minor: Story = {
  args: { minor: true },
}
