import type { Meta, StoryObj } from '@storybook/react-vite'
import { RewardRedemptionCard } from './RewardRedemptionCard'

const meta = {
  title: 'Booking & Perks/Reward Redemption Card',
  component: RewardRedemptionCard,
  parameters: { layout: 'padded' },
  args: { applied: false, heading: 'Free Appetizer', subheading: 'Complimentary app with your booking' },
} satisfies Meta<typeof RewardRedemptionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const DefaultVsApplied: Story = {
  render: (args) => (
    <div className="sbx-stack" style={{ maxWidth: 420, gap: 12 }}>
      <RewardRedemptionCard {...args} applied={false} />
      <RewardRedemptionCard {...args} applied />
    </div>
  ),
}
