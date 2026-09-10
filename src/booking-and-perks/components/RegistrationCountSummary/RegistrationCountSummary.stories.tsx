import type { Meta, StoryObj } from '@storybook/react-vite'
import { RegistrationCountSummary } from './RegistrationCountSummary'

const meta = {
  title: 'Booking & Perks/RegistrationCountSummary',
  component: RegistrationCountSummary,
  parameters: { layout: 'padded' },
  args: { registeredCount: 2, totalCount: 4 },
} satisfies Meta<typeof RegistrationCountSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
