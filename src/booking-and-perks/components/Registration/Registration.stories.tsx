import type { Meta, StoryObj } from '@storybook/react-vite'
import { Registration } from './Registration'

const meta = {
  title: 'Booking & Perks/Registration',
  component: Registration,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Registration>

export default meta
type Story = StoryObj<typeof meta>

export const RegisterPlayer: Story = {
  args: { variant: 'register-player' },
}

export const RegisteredSuccessfully: Story = {
  args: { variant: 'registered-success' },
}

export const LinkSent: Story = {
  args: {
    variant: 'link-sent',
    message: "We've texted a registration link to the guardian's phone.",
  },
}
