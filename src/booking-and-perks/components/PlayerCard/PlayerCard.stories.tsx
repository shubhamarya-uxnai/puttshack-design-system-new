import type { Meta, StoryObj } from '@storybook/react-vite'
import { RefreshCw } from '../../../icons'
import { PlayerCard } from './PlayerCard'

const meta = {
  title: 'Booking & Perks/PlayerCard',
  component: PlayerCard,
  parameters: { layout: 'padded' },
  args: {
    playerName: 'Alex Morgan',
    isLead: true,
    registrationStatus: 'registered',
    actionLabel: 'Change player',
    actionIcon: <RefreshCw aria-hidden="true" />,
  },
} satisfies Meta<typeof PlayerCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotRegistered: Story = {
  args: { isLead: false, registrationStatus: 'not-registered' },
}
