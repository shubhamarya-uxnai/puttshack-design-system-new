import type { Meta, StoryObj } from '@storybook/react-vite'
import { ParentGuardianOption1 } from './ParentGuardianOption1'

const meta = {
  title: 'Booking & Perks/ParentGuardianOption1',
  component: ParentGuardianOption1,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ParentGuardianOption1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { selected: true },
}

export const WithGuardianDetails: Story = {
  args: { selected: true, guardianDetails: true },
}
