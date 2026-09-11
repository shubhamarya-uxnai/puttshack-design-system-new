import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimeSlotChip } from './TimeSlotChip'

const meta = {
  title: 'Booking & Perks/TimeSlotChip',
  component: TimeSlotChip,
  parameters: { layout: 'padded' },
  args: { time: '2:00 PM', state: 'default' },
} satisfies Meta<typeof TimeSlotChip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Row: Story = {
  render: () => (
    <div className="sbx-row">
      <TimeSlotChip time="1:00 PM" badge="Best Value" />
      <TimeSlotChip time="2:00 PM" state="selected" />
      <TimeSlotChip time="2:30 PM" />
      <TimeSlotChip time="3:00 PM" />
      <TimeSlotChip time="4:00 PM" />
      <TimeSlotChip time="5:00 PM" state="disabled" />
    </div>
  ),
}
