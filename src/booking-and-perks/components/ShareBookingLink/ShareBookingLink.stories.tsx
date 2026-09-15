import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShareBookingLink } from './ShareBookingLink'

const meta = {
  title: 'Booking & Perks/Share Booking Link',
  component: ShareBookingLink,
  parameters: { layout: 'padded' },
  args: { signTandC: false },
} satisfies Meta<typeof ShareBookingLink>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <ShareBookingLink {...args} />
    </div>
  ),
}

export const SignedVariant: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <ShareBookingLink signTandC />
    </div>
  ),
}
