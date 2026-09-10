import type { Meta, StoryObj } from '@storybook/react-vite'
import { UnderOrOlderOlder } from './UnderOrOlderOlder'

const meta = {
  title: 'Booking & Perks/UnderOrOlderOlder',
  component: UnderOrOlderOlder,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof UnderOrOlderOlder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { selected: true },
}
