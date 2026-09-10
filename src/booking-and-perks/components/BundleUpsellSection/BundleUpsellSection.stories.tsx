import type { Meta, StoryObj } from '@storybook/react-vite'
import { BundleUpsellSection } from './BundleUpsellSection'

const meta = {
  title: 'Booking & Perks/Bundle Upsell Section',
  component: BundleUpsellSection,
  parameters: { layout: 'padded' },
  args: { added: false },
} satisfies Meta<typeof BundleUpsellSection>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <BundleUpsellSection {...args} />
    </div>
  ),
}

export const Added: Story = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <BundleUpsellSection added />
    </div>
  ),
}
