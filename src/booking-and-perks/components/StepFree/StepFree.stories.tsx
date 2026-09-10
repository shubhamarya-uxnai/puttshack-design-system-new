import type { Meta, StoryObj } from '@storybook/react-vite'
import { StepFree } from './StepFree'

const meta = {
  title: 'Booking & Perks/StepFree',
  component: StepFree,
  parameters: { layout: 'padded' },
  args: { label: 'Step-free access', description: 'Let us know if anyone in your party needs step-free access.' },
} satisfies Meta<typeof StepFree>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { checked: true },
}
