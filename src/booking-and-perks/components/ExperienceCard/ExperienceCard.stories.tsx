import type { Meta, StoryObj } from '@storybook/react-vite'
import { ExperienceCard } from './ExperienceCard'

const meta = {
  title: 'Booking & Perks/Experience Card',
  component: ExperienceCard,
  parameters: { layout: 'padded' },
  args: {
    experience: 'PUTTCADE',
    details: 'Tech-tracked putting on our interactive courses with automatic scoring and friendly competition',
  },
} satisfies Meta<typeof ExperienceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const SelectedVsUnselected: Story = {
  render: (args) => (
    <div className="sbx-row">
      <ExperienceCard {...args} selected={false} />
      <ExperienceCard {...args} selected />
    </div>
  ),
}
