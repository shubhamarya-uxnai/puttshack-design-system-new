import type { Meta, StoryObj } from '@storybook/react-vite'
import { RegistrationCountSummary } from './RegistrationCountSummary'

const meta = {
  title: 'Booking & Perks/RegistrationCountSummary',
  component: RegistrationCountSummary,
  parameters: { layout: 'padded' },
  args: { registeredCount: 1, totalCount: 4, registrationLink: 'puttshack.com/register/PSK-P4381PB' },
} satisfies Meta<typeof RegistrationCountSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
