import type { Meta, StoryObj } from '@storybook/react-vite'
import { TandC } from './TandC'

const meta = {
  title: 'Booking & Perks/T&C',
  component: TandC,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TandC>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <TandC />
    </div>
  ),
}
