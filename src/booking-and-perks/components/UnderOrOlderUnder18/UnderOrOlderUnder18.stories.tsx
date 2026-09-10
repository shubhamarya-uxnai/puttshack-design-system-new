import type { Meta, StoryObj } from '@storybook/react-vite'
import { UnderOrOlderUnder18 } from './UnderOrOlderUnder18'

const meta = {
  title: 'Booking & Perks/UnderOrOlderUnder18',
  component: UnderOrOlderUnder18,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof UnderOrOlderUnder18>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithGuardianDetails: Story = {
  args: { guardianDetails: true, selected: true },
}
