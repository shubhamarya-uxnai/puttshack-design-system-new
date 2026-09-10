import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppHeader } from './AppHeader'

const meta = {
  title: 'Booking & Perks/AppHeader',
  component: AppHeader,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutStatusBar: Story = {
  args: { showStatusBar: false },
}
