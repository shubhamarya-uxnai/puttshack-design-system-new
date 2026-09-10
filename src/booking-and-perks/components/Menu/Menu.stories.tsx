import type { Meta, StoryObj } from '@storybook/react-vite'
import { Menu } from './Menu'
import { Price } from '../Price/Price'

const meta = {
  title: 'Booking & Perks/Menu',
  component: Menu,
  parameters: { layout: 'padded' },
  args: { title: "Puttcade's Menu" },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Cheeseburger</span>
        <Price amount="$14" inverse />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Loaded Fries</span>
        <Price amount="$9" inverse />
      </div>
    </Menu>
  ),
}
