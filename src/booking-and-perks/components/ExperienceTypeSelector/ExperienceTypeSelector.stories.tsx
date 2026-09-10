import type { Meta, StoryObj } from '@storybook/react-vite'
import { ExperienceTypeSelector } from './ExperienceTypeSelector'

const meta = {
  title: 'Booking & Perks/Experience Type Selector',
  component: ExperienceTypeSelector,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ExperienceTypeSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 480 }}>
      <ExperienceTypeSelector {...args} />
    </div>
  ),
}
