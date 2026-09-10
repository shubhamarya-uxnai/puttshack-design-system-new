import type { Meta, StoryObj } from '@storybook/react-vite'
import { PaymentMethodForm } from './PaymentMethodForm'

const meta = {
  title: 'Booking & Perks/PaymentMethodForm',
  component: PaymentMethodForm,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof PaymentMethodForm>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const NewCardExpanded: Story = {
  args: { newCard: true },
}
