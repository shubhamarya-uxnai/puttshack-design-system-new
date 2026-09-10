import type { Meta, StoryObj } from '@storybook/react-vite'
import { TermsAndConditionsSignup } from './TermsAndConditionsSignup'

const meta = {
  title: 'Booking & Perks/TermsAndConditionsSignup',
  component: TermsAndConditionsSignup,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TermsAndConditionsSignup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
