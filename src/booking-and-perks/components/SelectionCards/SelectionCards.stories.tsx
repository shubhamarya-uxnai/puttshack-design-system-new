import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectionCards } from './SelectionCards'

const meta = {
  title: 'Booking & Perks/Selection Cards',
  component: SelectionCards,
  parameters: { layout: 'padded' },
  args: {
    title: 'Unlimited',
    content: 'Keep the fun going with unlimited rounds, perfect for the full Puttshack experience.',
    showDetails: true,
    badge: 'Popular',
    showCheck: true,
    showPriceBreakdown: true,
    adultPrice: '$36',
    juniorPrice: '$24',
    showTotalPrice: true,
    totalPrice: '$144',
  },
} satisfies Meta<typeof SelectionCards>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const SelectedVsUnselected: Story = {
  render: (args) => (
    <div className="sbx-row">
      <div className="sbx-stack">
        <span className="sbx-label">unselected</span>
        <SelectionCards {...args} selected={false} />
      </div>
      <div className="sbx-stack">
        <span className="sbx-label">selected</span>
        <SelectionCards {...args} selected />
      </div>
    </div>
  ),
}
