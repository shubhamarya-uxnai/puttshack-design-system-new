import type { Meta, StoryObj } from '@storybook/react-vite'
import { Wrapper } from './Wrapper'

const meta = {
  title: 'Booking & Perks/Wrapper',
  component: Wrapper,
  parameters: { layout: 'padded' },
  args: { label: 'Is the player under 18?' },
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
