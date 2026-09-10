import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerChange } from './PlayerChange'

const meta = {
  title: 'Booking & Perks/PlayerChange',
  component: PlayerChange,
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['removed', 'added'] },
  },
  args: { variant: 'added', playerName: 'Jordan Lee', detail: 'Swapped in for Alex' },
} satisfies Meta<typeof PlayerChange>

export default meta
type Story = StoryObj<typeof meta>

export const Added: Story = {}

export const Removed: Story = {
  args: { variant: 'removed', playerName: 'Alex Kim', detail: 'Removed from party' },
}
