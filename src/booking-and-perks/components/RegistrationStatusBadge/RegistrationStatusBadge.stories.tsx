import type { Meta, StoryObj } from '@storybook/react-vite'
import { RegistrationStatusBadge } from './RegistrationStatusBadge'

const meta = {
  title: 'Booking & Perks/RegistrationStatusBadge',
  component: RegistrationStatusBadge,
  parameters: { layout: 'padded' },
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['not-registered', 'registered', 'guardian', 'link-sent', 'in-progress'],
    },
  },
  args: { status: 'registered' },
} satisfies Meta<typeof RegistrationStatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <RegistrationStatusBadge status="not-registered" />
      <RegistrationStatusBadge status="registered" />
      <RegistrationStatusBadge status="guardian" />
      <RegistrationStatusBadge status="link-sent" />
      <RegistrationStatusBadge status="in-progress" />
    </div>
  ),
}
