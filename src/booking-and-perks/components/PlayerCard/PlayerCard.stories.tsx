import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerCard } from './PlayerCard'

const meta = {
  title: 'Booking & Perks/PlayerCard',
  component: PlayerCard,
  parameters: { layout: 'padded' },
  args: {
    playerName: 'Alex Parry',
    playerType: 'Adult (21+)',
    isLead: true,
    registrationStatus: 'registered',
  },
} satisfies Meta<typeof PlayerCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotRegistered: Story = {
  args: { playerName: 'Player 2', isLead: false, registrationStatus: 'not-registered' },
}
