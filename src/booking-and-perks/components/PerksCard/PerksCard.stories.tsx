import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerksCard } from './PerksCard'

const meta = {
  title: 'Booking & Perks/Perks Card',
  component: PerksCard,
  parameters: { layout: 'padded' },
  args: { type: 'sign-in', isSignedIn: false, rewardsAvailable: true },
} satisfies Meta<typeof PerksCard>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllStates: Story = {
  render: () => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">Sign In</span>
        <PerksCard type="sign-in" isSignedIn={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">Rewards, signed out</span>
        <PerksCard type="rewards" isSignedIn={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">Rewards, signed in, available</span>
        <PerksCard type="rewards" isSignedIn rewardsAvailable />
      </div>
    </div>
  ),
}
