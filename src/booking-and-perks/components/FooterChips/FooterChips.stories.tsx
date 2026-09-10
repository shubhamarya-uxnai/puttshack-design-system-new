import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterChips } from './FooterChips'

const meta = {
  title: 'Booking & Perks/FooterChips',
  component: FooterChips,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FooterChips>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: { showIcon: true },
}

export const Experience: Story = {
  args: { variant: 'experience', children: 'Interactive Mini Golf', showIcon: true },
}
