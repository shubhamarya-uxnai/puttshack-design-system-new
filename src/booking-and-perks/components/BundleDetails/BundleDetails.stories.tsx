import type { Meta, StoryObj } from '@storybook/react-vite'
import { BundleDetails } from './BundleDetails'

const meta = {
  title: 'Booking & Perks/BundleDetails',
  component: BundleDetails,
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  args: {
    eyebrow: 'Bundle',
    bundleName: 'Puttcade Party Bundle',
    description: 'Two rounds of putting plus arcade credit for the whole crew.',
    toastMessage: "Puttcade is your private space — add a server and shareables for the crew.",
  },
} satisfies Meta<typeof BundleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
