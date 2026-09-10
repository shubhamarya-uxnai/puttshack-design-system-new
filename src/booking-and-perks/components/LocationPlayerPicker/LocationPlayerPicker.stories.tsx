import type { Meta, StoryObj } from '@storybook/react-vite'
import { LocationPlayerPicker } from './LocationPlayerPicker'

const meta: Meta<typeof LocationPlayerPicker> = {
  title: 'Booking and Perks/LocationPlayerPicker',
  component: LocationPlayerPicker,
  parameters: { layout: 'padded', backgrounds: { default: 'magenta-dark' } },
}

export default meta
type Story = StoryObj<typeof LocationPlayerPicker>

export const Default: Story = {}

export const WithGuests: Story = {
  args: {
    ageGroups: [
      { label: 'Adults', ageRange: '21+', count: 2 },
      { label: 'Young Adults', ageRange: '13-20', count: 1 },
      { label: 'Juniors', ageRange: '0-12', count: 0 },
    ],
  },
}
