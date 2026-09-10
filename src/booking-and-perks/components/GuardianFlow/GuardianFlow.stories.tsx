import type { Meta, StoryObj } from '@storybook/react-vite'
import { GuardianFlow } from './GuardianFlow'

const meta = {
  title: 'Booking & Perks/GuardianFlow',
  component: GuardianFlow,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof GuardianFlow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithConsentChecked: Story = {
  args: { consentChecked: true, phoneNumber: '(555) 123-4567' },
}
