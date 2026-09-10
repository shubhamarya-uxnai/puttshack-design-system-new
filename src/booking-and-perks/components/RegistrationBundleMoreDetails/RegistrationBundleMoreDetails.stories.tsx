import type { Meta, StoryObj } from '@storybook/react-vite'
import { RegistrationBundleMoreDetails } from './RegistrationBundleMoreDetails'

const meta = {
  title: 'Booking & Perks/RegistrationBundleMoreDetails',
  component: RegistrationBundleMoreDetails,
  parameters: { layout: 'padded' },
  args: {
    chipLabel: 'New',
    eyebrow: 'Bundle',
    bundleName: 'PUTTCADE PARTY BUNDLE',
    description: 'Add two rounds of putting plus arcade credit for the whole crew.',
  },
} satisfies Meta<typeof RegistrationBundleMoreDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
